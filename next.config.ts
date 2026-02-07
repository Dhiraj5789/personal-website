import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */

const nextConfig:NextConfig = {
  output: "export",                       // generates static files
  basePath: "/personal-website",            // your GitHub repo slug
  assetPrefix: "/personal-website/",         // ensures assets load correctly
  images: {
    unoptimized: true                     // disables dynamic image optimization
  }
};

module.exports = nextConfig;
export default nextConfig;
