import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match API calls starting with /api
        destination: "http://localhost:4000/api/:path*", // Proxy to your NestJS backend running on port 4000
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wypeydidbspluuiqhjua.supabase.co", // Allow images from your Supabase host
        pathname: "/storage/v1/object/public/harihara_image/images/**", // Match the public Supabase storage image path
      },
    ],
  },
};

export default nextConfig;
