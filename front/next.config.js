/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: [],
    loader: 'default',
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig