import { type Metadata } from "next";
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
    "kubernetes, next.js contributor; distributed system @ carnegie mellon; building things in web and cloud",
  keywords: [
    "kubernetes",
    "web",
    "cloud",
    "next.js",
    "react",
    "computer",
    "go",
    "typescript",
    "javascript",
  ],
};

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={cn("antialiased", mono.variable)}>
      <body className="container mx-auto px-4 py-20 h-svh overflow-y-scroll">
        {children}
      </body>
    </html>
  );
};

export default Layout;
