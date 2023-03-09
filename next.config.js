/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    NEXT_INSTAGRAM_TOKEN: process.env.NEXT_INSTAGRAM_TOKEN
  }
};

module.exports = nextConfig
