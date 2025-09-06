import localFont from "next/font/local";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "./PPNeueMontreal-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPNeueMontreal-Thin.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-montreal",
});

const ppNeueMontrealMono = localFont({
  src: [
    {
      path: "./PPNeueMontrealMono-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./PPNeueMontrealMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PPNeueMontrealMono-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPNeueMontrealMono-Thin.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-pp-neue-montreal-mono",
});

export { ppNeueMontreal, ppNeueMontrealMono };
