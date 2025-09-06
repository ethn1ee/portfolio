"use client";

import useHighlighter from "@/hooks/use-highlighter";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  useRef,
} from "react";

type HighlightProps = {
  padding?: { x?: number; y?: number };
  children: ReactNode;
};

const Highlighter = ({ children, padding }: HighlightProps) => {
  const { setElement, setPadding } = useHighlighter();

  if (!setElement || !setPadding)
    throw new Error("Highlighter must be used within a HighlighterProvider");

  const ref = useRef<HTMLElement>(null);
  const child = Children.only(children);

  if (!isValidElement(child)) return children;

  return cloneElement(child, {
    // @ts-expect-error ts doesn't know if ref can be passed
    ref,
    onMouseEnter: () => {
      setElement(ref);
      setPadding({ x: 0, y: 0, ...padding });
    },
    onMouseLeave: () => setElement(null),
  });
};

export default Highlighter;
