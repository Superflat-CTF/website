import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
