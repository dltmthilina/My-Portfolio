// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for export if you use <Image />
  },
};

module.exports = nextConfig;
