import { HighlighterContext } from "@/contexts/highlighter-context";
import { useContext } from "react";

const useHighlighter = () => {
  const context = useContext(HighlighterContext);
  if (!context) {
    throw new Error("useHighlighter must be used within a HighlighterProvider");
  }

  return context;
};

export default useHighlighter;
