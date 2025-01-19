import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/C/Ionian",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
