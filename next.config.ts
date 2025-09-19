import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [new URL("https://raw.githubusercontent.com/**")],
  },
};

export default nextConfig;
