import path from "node:path";
import type { NextConfig } from "next";

/** App package root when running `next` from `./app` — avoids Turbopack picking the repo-root lockfile. */
const turbopackRoot = path.resolve(process.cwd());

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  async redirects() {
    return [
      {
        source: "/lifestyle",
        destination: "/salary/premium/lifestyle",
        permanent: true,
      },
      {
        source: "/lifestyle/:path*",
        destination: "/salary/premium/lifestyle",
        permanent: true,
      },
      {
        source: "/premium",
        destination: "/salary/premium/offer-comparison",
        permanent: true,
      },
      {
        source: "/premium/wealth-forecast",
        destination: "/salary/premium/wealth-forecast",
        permanent: true,
      },
      {
        source: "/premium/emi-analyzer",
        destination: "/salary/premium/emi-analyzer",
        permanent: true,
      },
      {
        source: "/premium/offer-comparison",
        destination: "/salary/premium/offer-comparison",
        permanent: true,
      },
      {
        source: "/salary/breakdown",
        destination: "/salary/premium/breakdown",
        permanent: true,
      },
      {
        source: "/salary/breakdown/:path*",
        destination: "/salary/premium/breakdown",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
