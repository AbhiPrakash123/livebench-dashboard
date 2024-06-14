/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    reactStrictMode: true,
    images: {
        domains: ['ik.imagekit.io','tenxer-sw-download.s3.amazonaws.com'],
        unoptimized: true,
    },
};

export default nextConfig;
