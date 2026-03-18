"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type LinkButtonProps =
  | { type: "link"; href: string; name: string }
  | { type: "copy"; name: string };

export const LinkButton = (props: LinkButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTimeout = () => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isCopied) return;
    copyTimeout();
  }, [isCopied]);

  return props.type === "link" ? (
    <Link href={props.href} target="_blank" className="hover:opacity-80">
      &gt; {props.name}
    </Link>
  ) : (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.name);
        setIsCopied(true);
      }}
      className="hover:opacity-80"
    >
      &gt; {props.name}
      {isCopied && (
        <span className="relative left-4 text-muted-foreground">copied</span>
      )}
    </button>
  );
};
