/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: [],
    loader: 'default',
  },
}

module.exports = nextConfig