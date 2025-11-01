/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {unoptimized: true},
    basePath: "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/cdchamberlin.github.io" : ""
};

export default nextConfig;
