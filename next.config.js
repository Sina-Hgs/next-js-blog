/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  assetPrefix: isProd ? "https://sina-hgs.github.io/next-js-blog/" : undefined,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
