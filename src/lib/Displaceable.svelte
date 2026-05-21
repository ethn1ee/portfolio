<script lang="ts">
  import { onMount, tick, type Snippet } from "svelte";
  import {
    prepareRichInline,
    walkRichInlineLineRanges,
    materializeRichInlineLineRange,
    type RichInlineItem,
  } from "@chenglou/pretext/rich-inline";
  import { clearCache } from "@chenglou/pretext";

  let {
    children,
    font = "16px Iosevka, ui-monospace, monospace",
    lineHeight = 32,
  }: {
    children: Snippet;
    font?: string;
    lineHeight?: number;
  } = $props();

  const GAP_GLYPHS = ["#", "▓", "▒", "▄"];

  let container: HTMLDivElement;
  let measureSlot: HTMLDivElement | undefined = $state();
  let width = $state(0);
  let mouseX = $state(-9999);
  let mouseY = $state(-9999);
  let hovering = $state(false);
  let gapGlyph = $state(GAP_GLYPHS[0]);
  let lastRollAt = 0;
  const ROLL_INTERVAL_MS = 120;

  function rollGapGlyph(): string {
    let s = "";
    for (let i = 0; i < 3; i++) {
      s += GAP_GLYPHS[Math.floor(Math.random() * GAP_GLYPHS.length)];
    }
    return s;
  }

  // A "segment" is a contiguous run of text that all shares the same styling
  // (e.g. plain text, or a single <a> tag). Extracted either from the `text`
  // prop or from the children DOM after a hidden measurement pass.
  type SegStyle = { href?: string; className?: string } | null;
  type Segment = { text: string; style: SegStyle };

  function extractFromDom(root: HTMLElement): Segment[] {
    const out: Segment[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const t = node.textContent ?? "";
      if (!t.length) continue;
      // Find nearest <a> ancestor for styling info.
      let anchor: HTMLAnchorElement | null = null;
      let p: Node | null = node.parentNode;
      while (p && p !== root) {
        if ((p as HTMLElement).tagName === "A") {
          anchor = p as HTMLAnchorElement;
          break;
        }
        p = p.parentNode;
      }
      const style: SegStyle = anchor
        ? {
            href: anchor.getAttribute("href") ?? undefined,
            className: anchor.className,
          }
        : null;
      out.push({ text: t, style });
    }
    return out;
  }

  // Tokenization: each Token carries its segment style so we can render the
  // right element type per grapheme.
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  type Token = {
    text: string;
    isSpace: boolean;
    graphemes: string[];
    style: SegStyle;
  };

  let tokens = $state<Token[]>([]);
  let baseItems = $state<RichInlineItem[]>([]);

  function tokenize(segments: Segment[]) {
    const out: Token[] = [];
    for (const seg of segments) {
      const re = /\s+|\S+/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(seg.text)) !== null) {
        const chunk = m[0];
        const isSpace = /\s/.test(chunk[0]);
        const graphemes = Array.from(
          segmenter.segment(chunk),
          (s) => s.segment,
        );
        out.push({ text: chunk, isSpace, graphemes, style: seg.style });
      }
    }
    return out;
  }

  function rebuildFromSegments(segments: Segment[]) {
    tokens = tokenize(segments);
    baseItems = tokens.map((t) =>
      t.isSpace ? { text: " ", font } : { text: t.text, font },
    );
  }

  type Fragment = {
    text: string;
    x: number;
    y: number;
    width: number;
    itemIndex: number;
    noTransition?: boolean;
    style: SegStyle;
  };

  const prevY = new Map<number, number>();

  let fragments = $state<Fragment[]>([]);
  let totalHeight = $state(0);

  function layoutItems(items: RichInlineItem[]): {
    perItem: {
      itemIndex: number;
      x: number;
      y: number;
      width: number;
      text: string;
    }[];
    lineCount: number;
  } {
    const prepared = prepareRichInline(items);
    const perItem: {
      itemIndex: number;
      x: number;
      y: number;
      width: number;
      text: string;
    }[] = [];
    let lineIdx = 0;
    walkRichInlineLineRanges(prepared, width, (range) => {
      const line = materializeRichInlineLineRange(prepared, range);
      let x = 0;
      for (const frag of line.fragments) {
        x += frag.gapBefore;
        perItem.push({
          itemIndex: frag.itemIndex,
          x,
          y: lineIdx * lineHeight,
          width: frag.occupiedWidth,
          text: frag.text,
        });
        x += frag.occupiedWidth;
      }
      lineIdx++;
    });
    return { perItem, lineCount: lineIdx };
  }

  function computeLayout() {
    if (!width || baseItems.length === 0) return;

    const base = layoutItems(baseItems);

    let gapBeforeItem = -1;
    let gapInsideOffset = 0;

    if (hovering) {
      const hoveredLine = Math.floor(mouseY / lineHeight);
      let containing = base.perItem.find(
        (p) =>
          Math.floor(p.y / lineHeight) === hoveredLine &&
          mouseX >= p.x &&
          mouseX < p.x + p.width,
      );
      if (!containing) {
        const onLine = base.perItem.filter(
          (p) => Math.floor(p.y / lineHeight) === hoveredLine,
        );
        if (onLine.length > 0) {
          containing = onLine.reduce((best, p) =>
            Math.abs(p.x + p.width / 2 - mouseX) <
            Math.abs(best.x + best.width / 2 - mouseX)
              ? p
              : best,
          );
        }
      }

      if (containing) {
        const token = tokens[containing.itemIndex];
        // Don't displace when the cursor is over a link — otherwise the
        // link characters slide away from the cursor and become unclickable.
        if (!token.style?.href) {
          const charWidth =
            token.graphemes.length > 0
              ? containing.width / token.graphemes.length
              : containing.width;
          const localX = mouseX - containing.x;
          const rawOffset = Math.round(localX / Math.max(1, charWidth));
          const centered = Math.max(0, rawOffset - 1);
          gapInsideOffset = Math.max(
            0,
            Math.min(token.graphemes.length, centered),
          );
          gapBeforeItem = containing.itemIndex;
        }
      }
    }

    let items: RichInlineItem[] = baseItems;
    let gapItemIndex = -1;
    let splitHostBase = -1;

    if (gapBeforeItem >= 0) {
      const token = tokens[gapBeforeItem];
      if (gapInsideOffset === 0) {
        items = [
          ...baseItems.slice(0, gapBeforeItem),
          { text: gapGlyph, font, break: "never" as const },
          ...baseItems.slice(gapBeforeItem),
        ];
        gapItemIndex = gapBeforeItem;
      } else if (gapInsideOffset >= token.graphemes.length) {
        items = [
          ...baseItems.slice(0, gapBeforeItem + 1),
          { text: gapGlyph, font, break: "never" as const },
          ...baseItems.slice(gapBeforeItem + 1),
        ];
        gapItemIndex = gapBeforeItem + 1;
      } else {
        const leftText = token.graphemes.slice(0, gapInsideOffset).join("");
        const rightText = token.graphemes.slice(gapInsideOffset).join("");
        items = [
          ...baseItems.slice(0, gapBeforeItem),
          { text: leftText, font },
          { text: gapGlyph, font, break: "never" as const },
          { text: rightText, font },
          ...baseItems.slice(gapBeforeItem + 1),
        ];
        gapItemIndex = gapBeforeItem + 1;
        splitHostBase = gapBeforeItem;
      }
    }

    const final = layoutItems(items);

    const out: Fragment[] = [];
    for (const placed of final.perItem) {
      const isGap = placed.itemIndex === gapItemIndex;
      let baseIdx: number;
      let graphemeStart: number;
      let graphemes: string[];

      if (isGap) {
        baseIdx = -1;
        graphemeStart = 0;
        graphemes = Array.from(gapGlyph);
      } else if (splitHostBase >= 0) {
        const idx = placed.itemIndex;
        if (idx === splitHostBase) {
          baseIdx = splitHostBase;
          graphemeStart = 0;
          graphemes = tokens[baseIdx].graphemes.slice(0, gapInsideOffset);
        } else if (idx === splitHostBase + 2) {
          baseIdx = splitHostBase;
          graphemeStart = gapInsideOffset;
          graphemes = tokens[baseIdx].graphemes.slice(gapInsideOffset);
        } else if (idx > splitHostBase + 2) {
          baseIdx = idx - 2;
          graphemeStart = 0;
          graphemes = tokens[baseIdx].graphemes;
        } else {
          baseIdx = idx;
          graphemeStart = 0;
          graphemes = tokens[baseIdx].graphemes;
        }
      } else if (gapItemIndex >= 0) {
        const idx =
          placed.itemIndex > gapItemIndex
            ? placed.itemIndex - 1
            : placed.itemIndex;
        baseIdx = idx;
        graphemeStart = 0;
        graphemes = tokens[baseIdx].graphemes;
      } else {
        baseIdx = placed.itemIndex;
        graphemeStart = 0;
        graphemes = tokens[baseIdx].graphemes;
      }

      const style: SegStyle = isGap ? null : tokens[baseIdx].style;

      const count = graphemes.length || 1;
      const charWidth = placed.width / count;
      for (let gi = 0; gi < graphemes.length; gi++) {
        const g = graphemes[gi];
        const key = isGap ? -1000 - gi : baseIdx * 10000 + (graphemeStart + gi);
        out.push({
          // Use NBSP for whitespace so the browser renders the underline
          // across it when the grapheme belongs to a link.
          text: /\s/.test(g) ? " " : g,
          x: placed.x + gi * charWidth,
          y: placed.y,
          width: charWidth,
          itemIndex: key,
          style,
        });
      }
    }

    // Pretext collapses standalone whitespace items at item boundaries — so
    // when a link's text contains a space (e.g. "hci paper"), no fragment is
    // emitted for that space and the underline gets a hole. Detect adjacent
    // link fragments on the same line and fill the gap with a synthetic
    // space fragment that inherits the link's style.
    out.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));
    const filled: Fragment[] = [];
    for (let i = 0; i < out.length; i++) {
      const cur = out[i];
      filled.push(cur);
      const next = out[i + 1];
      if (
        next &&
        next.y === cur.y &&
        cur.style?.href &&
        next.style?.href === cur.style.href &&
        next.x > cur.x + cur.width + 0.5
      ) {
        const gapStart = cur.x + cur.width;
        const gapEnd = next.x;
        filled.push({
          text: " ",
          x: gapStart,
          y: cur.y,
          width: gapEnd - gapStart,
          itemIndex: -2000 - i,
          style: cur.style,
        });
      }
    }

    for (const frag of filled) {
      const prior = prevY.get(frag.itemIndex);
      if (prior !== undefined && prior !== frag.y) frag.noTransition = true;
      prevY.set(frag.itemIndex, frag.y);
    }

    fragments = filled;
    totalHeight = final.lineCount * lineHeight;
  }

  // Initial segment extraction: render `children` into the hidden
  // measurement slot, walk its DOM, and tokenize the result.
  onMount(async () => {
    await tick();
    // Wait for web fonts to load before pretext measures anything — otherwise
    // it caches widths against the fallback font, which renders narrower than
    // Iosevka.
    if (document.fonts?.ready) {
      await document.fonts.ready;
      clearCache();
    }
    if (measureSlot) {
      const segments = extractFromDom(measureSlot);
      rebuildFromSegments(segments);
    }

    const ro = new ResizeObserver(() => {
      width = container.clientWidth;
      computeLayout();
    });
    ro.observe(container);
    width = container.clientWidth;
    computeLayout();
    return () => ro.disconnect();
  });

  function onMove(e: MouseEvent) {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    const now = performance.now();
    if (now - lastRollAt >= ROLL_INTERVAL_MS) {
      gapGlyph = rollGapGlyph();
      lastRollAt = now;
    }
    hovering = true;
    computeLayout();
  }

  function onLeave() {
    hovering = false;
    computeLayout();
  }
</script>

<!-- Hidden measurement slot: children render here once so we can extract
     their text + link structure. Kept in the DOM (display: none) so layout
     isn't affected. -->
<div bind:this={measureSlot} style="display: none;">
  {@render children()}
</div>

<div
  bind:this={container}
  onmousemove={onMove}
  onmouseleave={onLeave}
  role="presentation"
  class="relative"
  style="height: {totalHeight}px; font: {font}; line-height: {lineHeight}px;"
>
  {#each fragments as frag (frag.itemIndex)}
    {#if frag.style?.href}
      <a
        class="absolute whitespace-pre {frag.style.className ?? ''}"
        href={frag.style.href}
        target="_blank"
        style="left: {frag.x}px; top: {frag.y}px; transition: {frag.noTransition
          ? 'none'
          : 'left 150ms ease-out'};"
      >
        {frag.text}
      </a>
    {:else}
      <span
        class="absolute whitespace-pre pointer-events-none"
        style="left: {frag.x}px; top: {frag.y}px; transition: {frag.noTransition
          ? 'none'
          : 'left 150ms ease-out'};"
      >
        {frag.text}
      </span>
    {/if}
  {/each}
</div>
