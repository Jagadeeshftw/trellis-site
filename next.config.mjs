/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    qualities: [50, 75, 90],
  },
};

export default nextConfig;
