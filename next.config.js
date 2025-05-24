/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    // Uyarı: Bu ayar ESLint hatalarını görmezden gelir, ideal olarak bu hataları düzeltmek gerekir
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 