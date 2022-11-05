/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.google.com',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
