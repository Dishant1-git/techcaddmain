import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimised images are content-hashed imports or rarely-changing /public files → let browsers/CDN keep them for 31 days.
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 2678400 },
};

export default nextConfig;
