import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  FinalCta,
  MarketingLayout,
  SectionIntro,
  styles,
} from "@/components/MarketingShell";
import { differentiators, packages, services } from "@/lib/marketing";

export default function HomePage() {
  return (
    <MarketingLayout>
      <section className={styles.officeHero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <Image className={`${styles.floatingAsset} ${styles.assetA}`} src="/images/split_transparent_assets/sheet1_asset_03.png" alt="" width={160} height={160} aria-hidden="true" />
        <Image className={`${styles.floatingAsset} ${styles.assetB}`} src="/images/split_transparent_assets/sheet1_asset_07.png" alt="" width={120} height={120} aria-hidden="true" />
        <Image className={`${styles.floatingAsset} ${styles.assetC}`} src="/images/split_transparent_assets/sheet1_asset_11.png" alt="" width={100} height={100} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Websites · Software · Hosting · Ongoing support</span>
          <h1>We build, host, and grow <span>your business online.</span></h1>
          <p>Sylvexa is a full-service web development and business support partner. We design your website, manage your hosting, keep it secure, and stay on as your ongoing digital team, not just your builder.</p>
          <div className={styles.buttonRow}>
            <Link className={styles.primaryButton} href="/contact">Get a free website audit <ArrowRight size={17} /></Link>
            <Link className={styles.secondaryButton} href="/packages">See our packages</Link>
          </div>
        </div>
      </section>
      <section className={styles.trustBar}><div><strong>99.9%</strong>hosting uptime target</div><div><strong>One partner</strong>design to support</div><div><strong>Ongoing</strong>support in every package</div></section>
      <section className={styles.section}><div className={styles.container}><div className={styles.problemGrid}><SectionIntro eyebrow="The problem" note="the tech should feel lighter" title="Running a business is hard enough without worrying about your website." body="Most business owners do not have time to manage a website, check security, chase hosting problems, or figure out why visitors are not becoming customers."/><div className={styles.problemQuote}>If your site is outdated, slow, hard to edit, or something you are nervous to touch, that is exactly the kind of problem Sylvexa exists to solve.</div></div></div></section>
      <section className={styles.officeStory}><div className={styles.officeStoryInner}><div className={styles.officeStoryImage}><Image src="/images/sylvexa-office-hero.jpg" alt="Modern office workspace" fill sizes="(max-width: 980px) 100vw, 52vw" /></div><div className={styles.officeStoryCopy}><span className={styles.officeStoryScript}>work that fits real life</span><h2>Professional enough for the boardroom. Human enough for Monday morning.</h2><p>We want Sylvexa to feel like a capable digital team sitting a few desks away: thoughtful, practical, easy to talk to, and focused on keeping the work moving.</p><Image className={styles.officeStoryAsset} src="/images/split_transparent_assets/sheet2_asset_12.png" alt="" width={120} height={120} aria-hidden="true" /></div></div></section>
      <section className={styles.sectionAlt}><div className={styles.container}><SectionIntro eyebrow="What we do" note="simple solutions, real results" title="Everything your business needs online, under one roof." body="From your first line of code to your next stage of growth, Sylvexa handles design, development, hosting, maintenance, and digital support."/><div className={styles.grid3}>{services.map(({ slug, title, short, icon: Icon }) => <article className={styles.card} key={slug}><div className={styles.cardIcon}><Icon size={22} /></div><h3>{title}</h3><p>{short}</p><Link className={styles.cardLink} href={`/services/${slug}`}>Learn more <ArrowRight size={14} /></Link></article>)}</div></div></section>
      <section className={styles.sectionDark}><div className={styles.container}><SectionIntro light eyebrow="Why Sylvexa" note="we stay close" title="We do not disappear after launch." body="Most web developers hand you a website and walk away. Sylvexa stays. We monitor, maintain, and improve your digital presence like an in-house team, without the in-house cost."/><div className={styles.grid4}>{differentiators.map(({ icon: Icon, title, text }) => <article className={`${styles.card} ${styles.cardDark}`} key={title}><div className={styles.cardIcon}><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className={styles.buttonRow}><Link className={styles.primaryButton} href="/growth-support">See Business Assistant support <ArrowRight size={17} /></Link></div></div></section>
      <section className={styles.section}><div className={styles.container}><SectionIntro eyebrow="Featured work" note="made to be used" title="Real businesses. Useful outcomes." body="Until every case study has verified client metrics, we would rather show honest capability than invent numbers. These preview cards are ready for your real project stories."/><div className={styles.grid3}>{["Business website", "Custom operations portal", "Commerce experience"].map((title,index)=><article className={styles.workCard} key={title}><div className={styles.workVisual}/><div className={styles.workCopy}><span>{index===1?"Software":"Web development"}</span><h3>{title}</h3><p>Challenge → Solution → measurable result.</p></div></article>)}</div><div className={styles.buttonRow}><Link className={styles.secondaryButton} href="/portfolio">View portfolio</Link></div></div></section>
      <section className={styles.sectionAlt}><div className={styles.container}><SectionIntro eyebrow="Packages" note="clear from day one" title="Simple pricing. No guesswork." body="Whether you are just getting started or ready to scale, there is a clear starting point, with custom scope available when you need it."/><div className={styles.grid3}>{packages.map(pkg=><article className={`${styles.priceCard} ${pkg.highlight?styles.priceCardPopular:""}`} key={pkg.name}>{pkg.highlight&&<span className={styles.priceBadge}>Most popular</span>}<h3>{pkg.name}</h3><p>{pkg.bestFor}</p><div className={styles.price}>{pkg.price}</div><div className={styles.monthly}>{pkg.monthly}</div><ul className={styles.featureList}>{pkg.features.slice(0,4).map(feature=><li key={feature}>{feature}</li>)}</ul><Link className={pkg.highlight?styles.primaryButton:styles.secondaryButton} href="/packages">Compare packages</Link></article>)}</div></div></section>
      <section className={styles.section}><div className={styles.container}><SectionIntro eyebrow="Client proof" note="real words only" title="Trust should be earned, not fabricated." body="This section is ready for verified client testimonials, logos, and case-study links. Until then, Sylvexa will not decorate the site with fictional praise from imaginary CEOs."/><div className={styles.grid2}><article className={styles.testimonial}><blockquote>“Add a verified client quote here once approved.”</blockquote><footer>Client name · Business</footer></article><article className={styles.testimonial}><blockquote>“A second real testimonial belongs here when you have permission to publish it.”</blockquote><footer>Client name · Business</footer></article></div></div></section>
      <FinalCta />
    </MarketingLayout>
  );
}
