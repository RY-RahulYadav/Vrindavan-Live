import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Main images are local, but admin panel still uses some Unsplash placeholders
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60,
  },
  // Increase timeout for image optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;