import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.NODE_ENV === "production" &&
    !siteConfig.url.includes("localhost");

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],

    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}