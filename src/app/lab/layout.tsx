import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sylvexa Lab",
  description:
    "Explore the Sylvexa Lab, a playful collection of small digital experiments from Sylvexa, soon to be trading as Bohlal-itech.",
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/lab",
    siteName: siteConfig.name,
    title: "Sylvexa Lab",
    description:
      "Small digital experiments from Sylvexa, soon to be trading as Bohlal-itech.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvexa Lab",
    description:
      "Small digital experiments from Sylvexa, soon to be trading as Bohlal-itech.",
    images: ["/twitter-image"],
  },
};

export default function LabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
