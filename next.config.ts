import type { NextConfig } from "next";
// import nextPWA from "next-pwa";

// /** @type {import('next').NextConfig} */
// // eslint-disable-next-line @typescript-eslint/no-require-imports
// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === "development",
// });

// module.exports = withPWA({
//   reactStrictMode: true,
// });

// const nextConfig = withPWA({
//   reactStrictMode: true,
// });

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
};

export default nextConfig;
