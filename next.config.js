/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["help.twitter.com"]
  }
}

module.exports = nextConfig
