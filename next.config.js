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
    domains: ["www.technoindiagroup.com"],
  },
};

module.exports = nextConfig;
