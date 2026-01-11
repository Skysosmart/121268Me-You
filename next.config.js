/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  // Optimize build
  swcMinify: true,
  // Reduce memory usage
  experimental: {
    optimizeCss: false,
  },
  // Increase memory limit
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
      }
    }
    return config
  },
}

module.exports = nextConfig

