"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  useEffect,
  useState,
} from "react";

type Element = RefObject<HTMLElement | null>;
type Padding = { x: number; y: number };

type HighlighterContextType = {
  // show: boolean;
  // setShow: Dispatch<SetStateAction<boolean>>;
  // element: Element | null;
  setElement: Dispatch<SetStateAction<Element | null>>;
  // padding: Padding;
  setPadding: Dispatch<SetStateAction<Padding>>;
};

const HighlighterContext = createContext<HighlighterContextType | null>(null);

const HIDE_TIMEOUT = 100 as const;

type HighlighterProviderProps = {
  children: ReactNode;
};

const HighlighterProvider = ({ children }: HighlighterProviderProps) => {
  const path = usePathname();
  const [show, setShow] = useState(false);
  const [element, setElement] = useState<Element | null>(null);
  const [padding, setPadding] = useState<Padding>({ x: 0, y: 0 });
  const [config, setConfig] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    if (element?.current) {
      setShow(true);
      const rect = element.current.getBoundingClientRect();
      setConfig({
        left: rect.x - padding.x,
        top: rect.y - padding.y,
        width: rect.width + padding.x * 2,
        height: rect.height + padding.y * 2,
      });
    } else {
      hideTimeout = setTimeout(() => {
        setShow(false);
      }, HIDE_TIMEOUT);
    }

    return () => {
      clearTimeout(hideTimeout);
    };
  }, [element, padding.x, padding.y]);

  useEffect(() => {
    setElement(null);
    setShow(false);
  }, [path]);

  return (
    <HighlighterContext.Provider value={{ setElement, setPadding }}>
      <motion.div
        animate={{
          ...config,
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: 0.1,
          ease: "circOut",
        }}
        className="fixed bg-highlight -z-10"
      />
      {children}
    </HighlighterContext.Provider>
  );
};

export { HighlighterContext, HighlighterProvider };
