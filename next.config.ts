import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/product", destination: "/products/shockwave-therapy-system", permanent: true },
      { source: "/products", destination: "/products/shockwave-therapy-system", permanent: true },
      { source: "/accessories", destination: "/products/accessories", permanent: true },
      { source: "/indications", destination: "/applications", permanent: true },
      { source: "/indications/:slug", destination: "/applications/:slug", permanent: true },
      { source: "/faq", destination: "/resources/faq", permanent: true },
      { source: "/community", destination: "/resources", permanent: true },
      { source: "/quality", destination: "/quality-regulatory", permanent: true },
      { source: "/distributor", destination: "/distributors", permanent: true },
    ];
  },
};

export default nextConfig;
