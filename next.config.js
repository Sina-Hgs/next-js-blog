/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/next-js-blog",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
