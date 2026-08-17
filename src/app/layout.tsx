import type { Metadata, Viewport } from "next";
import { Caveat, Instrument_Serif, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import CookieConsent from "@/components/CookieConsent";
import MedicalProfessionalPrompt from "@/components/MedicalProfessionalPrompt";
import { serviceAreas, siteConfig } from "@/lib/site";
import "./globals.css";
import "./image-system.css";
import "./mobile-and-popup-fixes.css";
import "./mobile-nav-redesign.css";
import "./local-seo.css";

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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sylvexa web development and custom software in Johannesburg, Gauteng" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.shortDescription, images: ["/twitter-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/icon", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#ffffff", "color-scheme": "light", "geo.region": "ZA-GP", "geo.placename": "Johannesburg, Gauteng, South Africa" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, themeColor: "#ffffff" };

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name, legalName: siteConfig.legalName, url: siteConfig.url, email: siteConfig.email,
  description: siteConfig.description, logo: `${siteConfig.url}/icon`,
  areaServed: serviceAreas.map((name)=>({"@type":"AdministrativeArea",name})),
  knowsAbout: ["Web development","Custom software development","Healthcare software development","Web applications","Managed hosting","E-commerce","Digital support"],
};

const websiteSchema = {
  "@context":"https://schema.org","@type":"WebSite","@id":`${siteConfig.url}/#website`,
  url:siteConfig.url,name:siteConfig.name,alternateName:"Sylvexa South Africa",inLanguage:siteConfig.language,
  publisher:{"@id":`${siteConfig.url}/#organization`},
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${siteConfig.url}/#service`,
  name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, email: siteConfig.email,
  areaServed: serviceAreas.map((name)=>({"@type":"AdministrativeArea",name})),
  serviceType: [
    "Website design and development", "Custom software development", "Healthcare software development",
    "Web hosting and cloud management", "Website maintenance and support", "E-commerce development", "Digital growth strategy",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language} className={`${manrope.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
      <body>{children}<MedicalProfessionalPrompt /><CookieConsent /></body>
      <Script id="sylvexa-structured-data" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, serviceSchema]).replace(/</g, "\\u003c") }} />
    </html>
  );
}
