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
      'previews.dropbox.com'
    ]
  }
}

module.exports = nextConfig
