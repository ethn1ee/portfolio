import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Taehoon Lee",
  description:
    "by day, i study distributed systems as a master’s student at carnegie mellon university. by night, i contribute to open source or play with my kubernetes homelab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-mono antialiased", jetbrainsMono.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
