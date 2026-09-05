const fallbackUrl = "https://sylvexa.co.za";

function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return configuredUrl ? configuredUrl.replace(/\/+$/, "") : fallbackUrl;
}

export const serviceAreas = [
  "Johannesburg",
  "Sandton",
  "Midrand",
  "Randburg",
  "Roodepoort",
  "Gauteng",
  "South Africa",
] as const;

export const siteConfig = {
  name: "Sylvexa",
  legalName: "Sylvexa",
  upcomingTradeName: "Bohlal-itech",
  brandTransition: "Sylvexa - soon to be trading as Bohlal-itech",
  url: getSiteUrl(),
  title: "Sylvexa | Web Development & Custom Software in Johannesburg, Gauteng",
  shortDescription:
    "Sylvexa builds websites, custom software, healthcare platforms, hosting and digital systems for organisations in Johannesburg, Gauteng and across South Africa. Soon to be trading as Bohlal-itech.",
  description:
    "Sylvexa is a South African web development and custom software partner serving Johannesburg, Gauteng and clients across South Africa with websites, web apps, healthcare technology, hosting, maintenance, e-commerce and ongoing digital support. Sylvexa will soon be trading as Bohlal-itech.",
  email: "hello@sylvexa.com",
  locale: "en_ZA",
  language: "en-ZA",
  keywords: [
    "Sylvexa",
    "Bohlal-itech",
    "Bohlal iTech",
    "web development Johannesburg",
    "website design Johannesburg",
    "web developers Johannesburg",
    "custom software Johannesburg",
    "software development Johannesburg",
    "web development Gauteng",
    "website design Gauteng",
    "custom software Gauteng",
    "web development South Africa",
    "software development South Africa",
    "healthcare software South Africa",
    "medical software Johannesburg",
    "patient portal development South Africa",
    "clinician dashboard development",
    "web application development",
    "managed hosting South Africa",
    "website maintenance Johannesburg",
    "e-commerce development South Africa",
    "digital business support Gauteng",
    "business automation South Africa",
    "digital product development South Africa",
  ],
} as const;
