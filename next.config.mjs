/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.app', 'vercel.com'], // Allow images from Vercel domains
  },
  // Recommended optimizations for Vercel deployment
  swcMinify: true,
  reactStrictMode: true,
}

export default nextConfig;
