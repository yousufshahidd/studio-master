/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.app', 'vercel.com'], // Allow images from Vercel domains
  },  // Enable React strict mode for better development experience
  reactStrictMode: true,
}

export default nextConfig;
