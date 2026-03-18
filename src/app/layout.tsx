import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Taehoon Lee",
  description:
    "kubernetes, next.js contributor; master of software engineering @ carnegie mellon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("antialiased", mono.variable)}>
      <body className="container mx-auto">{children}</body>
    </html>
  );
}
