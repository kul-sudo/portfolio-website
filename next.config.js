/** @type {import('next').NextConfig} */
export const nextConfig = {
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
