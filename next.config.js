/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/api/workspace/create',
        destination: '/workspace',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
