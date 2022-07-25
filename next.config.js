/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co', 'i.ibb.co'],
  },
  env: {
    GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    STRIPE_SECRET_KEY:process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY
  },
}

module.exports = nextConfig
