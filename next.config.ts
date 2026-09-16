import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
