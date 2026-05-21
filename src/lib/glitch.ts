// Global text-glitch effect. Walks every text node inside any element with
// the `glitch` class, wraps each grapheme in a <span>, and on mousemove
// briefly replaces the hovered grapheme with a random unicode block glyph.

const GLYPHS = ["#", "▓", "▒", "▄"];
const ORIG_ATTR = "data-glitch-orig";
const WRAPPED_ATTR = "data-glitch-wrapped";
const INDEX_ATTR = "data-glitch-idx";
const spansByRoot = new WeakMap<HTMLElement, HTMLElement[]>();

function randGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function wrap(root: HTMLElement) {
  if (root.getAttribute(WRAPPED_ATTR) === "1") return;
  root.setAttribute(WRAPPED_ATTR, "1");

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      // Skip text inside <script>, <style>, or already-wrapped spans.
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
      if (parent.hasAttribute(ORIG_ATTR)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) textNodes.push(n as Text);

  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });

  const created: HTMLElement[] = [];
  for (const node of textNodes) {
    const text = node.textContent ?? "";
    if (!text.length) continue;
    const frag = document.createDocumentFragment();
    for (const seg of segmenter.segment(text)) {
      const ch = seg.segment;
      if (/\s/.test(ch)) {
        // Keep whitespace as plain text — no need to wrap or glitch it.
        frag.appendChild(document.createTextNode(ch));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = ch;
      span.setAttribute(ORIG_ATTR, ch);
      frag.appendChild(span);
      created.push(span);
    }
    node.parentNode?.replaceChild(frag, node);
  }

  // Assign indices so neighbor lookups are O(1) at hover time.
  for (let i = 0; i < created.length; i++) {
    created[i].setAttribute(INDEX_ATTR, String(i));
  }
  spansByRoot.set(root, created);
}

export type GlitchConfig = {
  hover?: {
    selector?: string;
    minMs?: number;
    maxMs?: number;
  };
  initial?: {
    selector?: string;
    minMs?: number;
    maxMs?: number;
    maxDelayMs?: number;
  };
  pattern?: {
    selector?: string;
    fontSize?: number;
    color?: string;
  };
};

const DEFAULTS = {
  hover: { selector: ".glitch", minMs: 300, maxMs: 500 },
  initial: {
    selector: ".glitch-initial",
    minMs: 300,
    maxMs: 500,
    maxDelayMs: 300,
  },
  pattern: {
    selector: ".img-bg",
    fontSize: 40,
    color: "#404040",
  },
};

function glitchSpan(
  span: HTMLElement,
  minMs: number,
  maxMs: number,
  maxDelayMs = 0,
) {
  const delay = Math.random() * maxDelayMs;
  const dur = minMs + Math.random() * (maxMs - minMs);
  window.setTimeout(() => {
    span.textContent = randGlyph();
    window.setTimeout(() => {
      span.textContent = span.getAttribute(ORIG_ATTR);
    }, dur);
  }, delay);
}

let lastHoverTarget: HTMLElement | null = null;

function makeHoverHandler(minMs: number, maxMs: number) {
  return (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target || !target.hasAttribute(ORIG_ATTR)) return;
    if (target === lastHoverTarget) return;
    lastHoverTarget = target;

    const root = e.currentTarget as HTMLElement;
    const list = spansByRoot.get(root);
    if (!list) return;
    const idx = Number(target.getAttribute(INDEX_ATTR));

    for (const s of [list[idx - 1], target, list[idx + 1]]) {
      if (s) glitchSpan(s, minMs, maxMs);
    }
  };
}

export function glitch(config: GlitchConfig = {}) {
  if (typeof document === "undefined") return; // SSR guard

  const hover = { ...DEFAULTS.hover, ...config.hover };
  const initial = { ...DEFAULTS.initial, ...config.initial };
  const pattern = { ...DEFAULTS.pattern, ...config.pattern };

  const onHover = makeHoverHandler(hover.minMs, hover.maxMs);
  for (const root of document.querySelectorAll<HTMLElement>(hover.selector)) {
    wrap(root);
    root.addEventListener("mousemove", onHover);
  }

  for (const root of document.querySelectorAll<HTMLElement>(initial.selector)) {
    wrap(root);
    for (const s of root.querySelectorAll<HTMLElement>(`[${ORIG_ATTR}]`)) {
      glitchSpan(s, initial.minMs, initial.maxMs, initial.maxDelayMs);
    }
  }

  for (const el of document.querySelectorAll<HTMLElement>(pattern.selector)) {
    paintGlitchPattern(el, pattern.fontSize, pattern.color);
  }
}

function paintGlitchPattern(el: HTMLElement, fontSize: number, color: string) {
  // Monospace metrics: glyph advance ~0.6em, line box ~0.78em for these block glyphs.
  const cellW = Math.round(fontSize * 0.6);
  const cellH = Math.round(fontSize * 0.78);
  const rect = el.getBoundingClientRect();
  const cols = Math.ceil(rect.width / cellW) + 1;
  const rows = Math.ceil(rect.height / cellH) + 1;
  const w = cols * cellW;
  const h = rows * cellH;
  let cells = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      const x = c * cellW;
      const y = (r + 1) * cellH - Math.round(fontSize * 0.14);
      cells += `<text x="${x}" y="${y}" font-family="monospace" font-size="${fontSize}" fill="${color}">${ch}</text>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${cells}</svg>`;
  el.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = `${w}px ${h}px`;
}
