/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/next-js-blog",
  },
};

module.exports = nextConfig;
