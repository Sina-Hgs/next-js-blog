/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    loader: "akamai",
    path: "https://sina-hgs.github.io/next-js-blog/",
  },
};

module.exports = nextConfig;
