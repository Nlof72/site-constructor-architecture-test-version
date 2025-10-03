/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@platform/ui-kit', '@platform/config'],
  
  // Environment-based site configuration
  env: {
    SITE_ID: process.env.SITE_ID,
  },

  // Multi-domain support
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<siteId>.*).example.com',
          },
        ],
        destination: '/sites/:siteId/:path*',
      },
    ];
  },

  // Image optimization (updated for Next.js 15)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
