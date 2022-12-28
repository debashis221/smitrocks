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
      "smitgp.edu.in",
      "mdbcdn.b-cdn.net",
      "picsum.photos",
      "source.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
