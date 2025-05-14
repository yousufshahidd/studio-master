/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/studio-master', // Required for GitHub Pages
  // Additional configuration for experimental features
  experimental: {
    appDir: true,
  },
}

export default nextConfig;
