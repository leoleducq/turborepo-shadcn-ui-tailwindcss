/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui"],
  outputFileTracingExcludes: {
    "*": [
      "public/**/*.mp4",
      "public/**/*.mov", 
      "public/**/*.avi",
      "node_modules/@swc/core-linux-x64-gnu",
      "node_modules/@swc/core-linux-x64-musl",
      "node_modules/@esbuild/**",
    ],
  },
};

export default nextConfig;