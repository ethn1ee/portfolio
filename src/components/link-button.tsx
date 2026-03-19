"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type LinkButtonProps =
  | { type: "link"; href: string; name: string; internal?: boolean }
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
    <Link href={props.href} target={props.internal ? undefined : "_blank"}>
      &gt; {props.name}
    </Link>
  ) : (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.name);
        setIsCopied(true);
      }}
    >
      &gt; {props.name}
      {isCopied && (
        <span className="relative left-4 text-muted-foreground">copied</span>
      )}
    </button>
  );
};
