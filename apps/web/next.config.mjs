/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // le port de votre Strapi
        pathname: "/uploads/**",
      },
      {
        protocol: "https", // ou http selon votre config
        hostname: "votre-domain-production.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
