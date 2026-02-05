import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/monster-v2',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
