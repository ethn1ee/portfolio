import { HighlighterProvider } from "@/contexts/highlighter-context";
import { ProjectContextProvider } from "@/contexts/project-context";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ppNeueMontreal, ppNeueMontrealMono } from "../lib/fonts";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Taehoon Lee",
  description: "Caught in the web",
};

type LayoutProps = {
  children: Readonly<ReactNode>;
  aside: Readonly<ReactNode>;
};

const Layout = ({ children, aside }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={`${ppNeueMontreal.variable} ${ppNeueMontrealMono.variable}`}
    >
      <body>
        <HighlighterProvider>
          <ProjectContextProvider>
            <div className="container @container min-h-svh mx-auto flex border-x">
              {children}
              {aside}
            </div>
            <Footer />
          </ProjectContextProvider>
        </HighlighterProvider>
      </body>
    </html>
  );
};

export default Layout;
