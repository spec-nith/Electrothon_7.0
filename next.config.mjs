/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.amazonaws.com"], // Allow remote images from this domain
  },
};

export default nextConfig;
