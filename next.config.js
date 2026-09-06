/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  // Enable static exports for Capacitor
  output: 'export',
  distDir: 'out',
};

module.exports = nextConfig;
