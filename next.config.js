/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "128.199.48.214",
      },
    ],
  },
};

module.exports = nextConfig;
