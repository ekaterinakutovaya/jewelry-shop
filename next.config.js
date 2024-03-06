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
    NEXT_INSTAGRAM_TOKEN: 'IGQWROZAmM0MHVVSUc5MnVIbVlLaktBSEhVWDdfaGJsUmxhWVoxa2ZAPb2lCc04xdnZAfWDV1cWNwRzlFa09qemkzMzl0NE9GMHlhZAlRad1VZANHZAhMFRLY0FCU21KdGc1bEZAvaEQ2aG9zYWc5bEg2MXBnM3VnUXVtOWsZD'
  }
};

module.exports = nextConfig
