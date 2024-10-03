/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["stylrev.com"], // Whitelisted domains for images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lrustdadugzpmnmlgbrq.supabase.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "stylrev.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
