const fallbackUrl = "https://sylvexa.co.za";

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
  upcomingTradeName: "Bohlal-itech",
  brandTransition: "Sylvexa - soon to be trading as Bohlal-itech",
  url: getSiteUrl(),

  title: "Sylvexa | Business Systems, Automation & Digital Products",

  shortDescription:
    "Sylvexa builds connected digital products, business systems, automation, and practical software for modern teams. Soon to be trading as Bohlal-itech.",

  description:
    "Sylvexa builds connected digital products, custom business systems, workflow automation, intelligent tools, and modern web experiences that help businesses work with more clarity and less friction. Sylvexa will soon be trading as Bohlal-itech.",

  email: "hello@sylvexa.com",

  locale: "en_ZA",
  language: "en-ZA",

  keywords: [
    "Sylvexa",
    "Bohlal-itech",
    "Bohlal iTech",
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
    "digital product development",
  ],
} as const;
