import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/holter-24-horas',
        destination: '/cardiologia/holter-24-horas',
        permanent: true,
      },
      {
        source: '/mapa-24-horas',
        destination: '/cardiologia/mapa-24-horas',
        permanent: true,
      },
      {
        source: '/infiltraciones-rodilla',
        destination: '/servicios/viscosuplementacion-para-rodilla',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
