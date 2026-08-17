import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Mail, Menu, MessageCircle } from "lucide-react";

import { navigation } from "@/lib/marketing";
import styles from "./MarketingShell.module.css";

export { styles };

type HeroVariant =
  | "about"
  | "services"
  | "packages"
  | "process"
  | "portfolio"
  | "growth"
  | "testimonials"
  | "faq"
  | "contact"
  | "resources"
  | "serviceA"
  | "serviceB"
  | "serviceC"
  | "serviceD"
  | "serviceE"
  | "serviceF";

const heroClasses: Record<HeroVariant, string> = {
  about: styles.heroAbout,
  services: styles.heroServices,
  packages: styles.heroPackages,
  process: styles.heroProcess,
  portfolio: styles.heroPortfolio,
  growth: styles.heroGrowth,
  testimonials: styles.heroTestimonials,
  faq: styles.heroFaq,
  contact: styles.heroContact,
  resources: styles.heroResources,
  serviceA: styles.heroServiceA,
  serviceB: styles.heroServiceB,
  serviceC: styles.heroServiceC,
  serviceD: styles.heroServiceD,
  serviceE: styles.heroServiceE,
  serviceF: styles.heroServiceF,
};

const heroAssets: Record<HeroVariant, string> = {
  about: "/images/split_transparent_assets/sheet1_asset_04.png",
  services: "/images/split_transparent_assets/sheet1_asset_08.png",
  packages: "/images/split_transparent_assets/sheet2_asset_03.png",
  process: "/images/split_transparent_assets/sheet1_asset_06.png",
  portfolio: "/images/split_transparent_assets/sheet2_asset_07.png",
  growth: "/images/split_transparent_assets/sheet2_asset_09.png",
  testimonials: "/images/split_transparent_assets/sheet1_asset_10.png",
  faq: "/images/split_transparent_assets/sheet2_asset_05.png",
  contact: "/images/split_transparent_assets/sheet1_asset_02.png",
  resources: "/images/split_transparent_assets/sheet2_asset_11.png",
  serviceA: "/images/split_transparent_assets/sheet1_asset_01.png",
  serviceB: "/images/split_transparent_assets/sheet1_asset_05.png",
  serviceC: "/images/split_transparent_assets/sheet1_asset_09.png",
  serviceD: "/images/split_transparent_assets/sheet2_asset_02.png",
  serviceE: "/images/split_transparent_assets/sheet2_asset_06.png",
  serviceF: "/images/split_transparent_assets/sheet2_asset_10.png",
};

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrap}>
        <Link href="/" className={styles.brand} aria-label="Sylvexa home">
          <span className={styles.brandMark}>
            <Layers3 size={18} />
          </span>
          <span>SYLVEXA</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.navActions}>
          <Link href="/contact" className={styles.navCta}>
            Start a project <ArrowRight size={15} />
          </Link>
          <details className={styles.mobileMenu}>
            <summary aria-label="Open navigation">
              <Menu size={20} />
            </summary>
            <nav>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">Contact</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>
              <Layers3 size={18} />
            </span>
            <span>SYLVEXA</span>
          </Link>
          <p>
            Websites, software, hosting, support, and digital growth handled as
            one ongoing partnership.
          </p>
          <span className={styles.footerScript}>built for real working days</span>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/services">Services</Link>
          <Link href="/packages">Packages</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <strong>Support</strong>
          <Link href="/growth-support">Business Assistant</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@sylvexa.com">
            <Mail size={14} /> hello@sylvexa.com
          </a>
          <Link href="/contact">
            <MessageCircle size={14} /> Request a consultation
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Sylvexa. All rights reserved.</span>
        <span>Built with the same care we promise clients.</span>
      </div>
    </footer>
  );
}

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  primary = "Start my project",
  primaryHref = "/contact",
  secondary,
  secondaryHref = "/packages",
  accent,
  variant = "services",
  assetSrc,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary?: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
  accent?: string;
  variant?: HeroVariant;
  assetSrc?: string;
}) {
  return (
    <section className={`${styles.pageHero} ${heroClasses[variant]}`}>
      <div className={styles.pageHeroPattern} aria-hidden="true" />
      <div className={styles.pageHeroPhoto} aria-hidden="true">
        <Image
          src={variant === "about" || variant === "growth" || variant === "contact"
            ? "/images/hero office.jpg"
            : "/images/sylvexa-office-hero.jpg"}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 44vw"
        />
      </div>
      <Image
        className={styles.pageHeroAsset}
        src={assetSrc ?? heroAssets[variant]}
        alt=""
        width={180}
        height={180}
        aria-hidden="true"
      />
      <div className={styles.pageHeroCopy}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        {accent && <span className={styles.scriptAccent}>{accent}</span>}
        <h1>{title}</h1>
        <p>{body}</p>
        <div className={styles.buttonRow}>
          <Link className={styles.primaryButton} href={primaryHref}>
            {primary} <ArrowRight size={17} />
          </Link>
          {secondary && (
            <Link className={styles.secondaryButton} href={secondaryHref}>
              {secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
  note,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  note?: string;
}) {
  return (
    <div className={`${styles.sectionIntro} ${light ? styles.lightText : ""}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      {note && <span className={styles.sectionNote}>{note}</span>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function FinalCta({
  title = "Ready for a website that works as hard as you do?",
  body = "Let’s talk about what your business actually needs. No pressure, no jargon, just a clear next step.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className={styles.finalCta}>
      <Image
        className={styles.finalCtaAsset}
        src="/images/split_transparent_assets/sheet2_asset_04.png"
        alt=""
        width={150}
        height={150}
        aria-hidden="true"
      />
      <div>
        <span className={styles.eyebrow}>Start here</span>
        <span className={styles.ctaScript}>let’s make it useful</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Link className={styles.primaryButton} href="/contact">
        Start my project <ArrowRight size={17} />
      </Link>
    </section>
  );
}
