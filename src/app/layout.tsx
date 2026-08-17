import type { Metadata, Viewport } from "next";
import { Caveat, Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import MedicalProfessionalPrompt from "@/components/MedicalProfessionalPrompt";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./image-system.css";
import "./mobile-and-popup-fixes.css";
import "./mobile-nav-redesign.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], variable: "--font-editorial", display: "swap", weight: "400" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-script", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: "/", siteName: siteConfig.name,
    title: siteConfig.title, description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sylvexa web development and digital business support" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.shortDescription, images: ["/twitter-image"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#ffffff", "color-scheme": "light" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, themeColor: "#ffffff" };

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name, legalName: siteConfig.legalName, url: siteConfig.url, email: siteConfig.email,
  description: siteConfig.description, logo: `${siteConfig.url}/icon`,
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${siteConfig.url}/#service`,
  name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, email: siteConfig.email,
  serviceType: [
    "Website design and development", "Custom software development", "Web hosting and cloud management",
    "Website maintenance and support", "E-commerce development", "Digital growth strategy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language} className={`${manrope.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
      <body>{children}<MedicalProfessionalPrompt /></body>
      <Script id="sylvexa-structured-data" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, serviceSchema]).replace(/</g, "\\u003c") }} />
    </html>
  );
}
