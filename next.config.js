/** @type {import('next').NextConfig} */

const inProductionMode = process.env.NODE_ENV === "production" ? true : false;

const nextConfig = {
  output: "export",
  basePath: inProductionMode ? "/next-js-blog" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
