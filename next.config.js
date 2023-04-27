/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'media.discordapp.net'
    ]
  }
}

module.exports = nextConfig
