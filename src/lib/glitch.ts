// Global text-glitch effect. Walks every text node inside any element with
// the `glitch` class, wraps each grapheme in a <span>, and on mousemove
// briefly replaces the hovered grapheme with a random unicode block glyph.

const GLYPHS = ["#", "▓", "▒", "▄"];
const REVERT_MS = 200;
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

let activeSpans: HTMLElement[] = [];
let revertTimer: number | null = null;

function restore(spans: HTMLElement[]) {
  for (const s of spans) {
    s.textContent = s.getAttribute(ORIG_ATTR);
  }
}

function onMouseMove(e: MouseEvent) {
  const target = e.target as HTMLElement | null;
  if (!target || !target.hasAttribute(ORIG_ATTR)) return;
  if (activeSpans[1] === target) return;

  restore(activeSpans);

  const root = e.currentTarget as HTMLElement;
  const list = spansByRoot.get(root);
  if (!list) return;
  const idx = Number(target.getAttribute(INDEX_ATTR));

  const next: HTMLElement[] = [];
  if (list[idx - 1]) next.push(list[idx - 1]);
  next.push(target);
  if (list[idx + 1]) next.push(list[idx + 1]);

  for (const s of next) s.textContent = randGlyph();
  activeSpans = next;

  if (revertTimer !== null) clearTimeout(revertTimer);
  revertTimer = window.setTimeout(() => {
    restore(activeSpans);
    activeSpans = [];
  }, REVERT_MS);
}

export function initGlitch() {
  if (typeof document === "undefined") return; // SSR guard

  const roots = document.querySelectorAll<HTMLElement>(".glitch");
  for (const root of roots) {
    wrap(root);
    root.addEventListener("mousemove", onMouseMove);
  }
}
