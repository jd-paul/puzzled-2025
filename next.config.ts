import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // produce static files in /out
  images: { unoptimized: true },
  // No basePath/assetPrefix because you use a custom domain
};

export default nextConfig;