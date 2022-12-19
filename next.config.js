/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "www.technoindiagroup.com",
      "c4.wallpaperflare.com",
      "placeimg.com",
    ],
  },
};

module.exports = nextConfig;
