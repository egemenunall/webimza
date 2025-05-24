import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'standalone',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
