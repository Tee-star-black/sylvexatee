const fallbackUrl = "http://localhost:3000";

function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return fallbackUrl;
  }

  return configuredUrl.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Sylvexa",
  legalName: "Sylvexa",
  url: getSiteUrl(),

  title: "Sylvexa | The Operating Layer for Modern Business",

  shortDescription:
    "Sylvexa connects digital presence, business systems, intelligence, and practical assistant tools into one focused digital environment.",

  description:
    "Sylvexa helps modern businesses connect their digital presence, operations, workflows, intelligence, and assistant tools into one deliberate system built for clarity, momentum, and growth.",

  email: "hello@sylvexa.com",

  locale: "en_ZA",
  language: "en-ZA",

  keywords: [
    "Sylvexa",
    "business systems",
    "digital transformation",
    "custom business software",
    "workflow automation",
    "business assistant tools",
    "web development",
    "business intelligence",
    "digital operations",
    "software solutions",
    "custom dashboards",
    "business automation",
  ],
} as const;