/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "https://sina-hgs.github.io/next-js-blog/" : undefined,
  assetPrefix: isProd ? "https://sina-hgs.github.io/next-js-blog/" : undefined,

  images: {
    unoptimized: true,
    loader: "akamai",
    path: "https://sina-hgs.github.io/next-js-blog/",
  },
};

module.exports = nextConfig;
