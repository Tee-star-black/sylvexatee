import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

import home from "./HomeOrganic.module.css";
import {
  FinalCta,
  MarketingLayout,
  SectionIntro,
  styles,
} from "@/components/MarketingShell";
import { differentiators, packages, services } from "@/lib/marketing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bohlal-itech | Digital Products, AI Systems & Custom Software in South Africa",
  description:
    "Bohlal-itech, the next chapter of Sylvexa, builds digital products, AI-enabled systems, healthcare platforms and cloud software for organisations in Johannesburg, Gauteng and across South Africa.",
  alternates: { canonical: "/" },
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: "Bohlal-itech | Technology that grows with people",
    description:
      "Human-centred digital products, intelligent systems and cloud infrastructure built for real-world use.",
    url: "/",
    locale: "en_ZA",
  },
};

const techBricks = [
  ["AI / LLMs", "Intelligence"],
  ["Gemini", "Models"],
  ["Vertex AI", "Platform"],
  ["Agents", "Orchestration"],
  ["Full Stack", "Product"],
  ["Next.js", "Web"],
  ["React", "Interface"],
  ["TypeScript", "Language"],
  ["Node.js", "Runtime"],
  ["NestJS", "Backend"],
  ["PostgreSQL", "Data"],
  ["Prisma", "Data layer"],
  ["Google Cloud", "Cloud"],
  ["Cloud Run", "Compute"],
  ["Pub/Sub", "Events"],
  ["Firebase", "Platform"],
  ["Docker", "Containers"],
  ["Automation", "Workflow"],
  ["Integrations", "Connected"],
  ["Data", "Insight"],
] as const;

const architectureLayers = [
  {
    number: "01",
    title: "Intelligence",
    body: "AI should sit inside a useful product, not float around it as decoration. We use models, agents and automation where they reduce friction, strengthen decisions or make complex workflows easier to operate.",
    tags: ["Gemini", "Vertex AI", "LLMs", "Agents", "Automation"],
  },
  {
    number: "02",
    title: "Product systems",
    body: "Interfaces, APIs, data models and business logic are designed as one system. The result is software that feels coherent to the people using it and remains practical for the team maintaining it.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    number: "03",
    title: "Cloud infrastructure",
    body: "Products need somewhere dependable to live. We connect deployment, storage, events, services and monitoring so the system can evolve without turning every new feature into a small administrative tragedy.",
    tags: ["Google Cloud", "Cloud Run", "Firebase", "Pub/Sub", "Docker"],
  },
] as const;

export default function HomePage() {
  return (
    <MarketingLayout>
      <section className={home.hero}>
        <div className={home.heroArtwork} aria-hidden="true" />
        <div className={home.heroWash} aria-hidden="true" />
        <div className={home.transitionNote}>Sylvexa is evolving into Bohlal-itech. Same intent, broader systems thinking.</div>

        <div className={home.heroInner}>
          <div className={home.heroCopy}>
            <span className={home.eyebrow}>Bohlal-itech · Johannesburg · South Africa</span>
            <h1>
              Technology that grows
              <span>with people.</span>
            </h1>
            <p className={home.heroLead}>
              We design and build digital products, AI-enabled systems and cloud software that connect ideas to real-world impact. Bohlal-itech is where product design, full-stack engineering and intelligent infrastructure meet.
            </p>
            <div className={home.heroActions}>
              <Link className={home.primaryAction} href="/contact">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link className={home.secondaryAction} href="/services">
                Explore our services
              </Link>
            </div>
            <div className={home.heroPrinciples}>
              <span>People</span>
              <span>Ideas</span>
              <span>Technology</span>
              <span>A brighter tomorrow</span>
            </div>
          </div>

          <div className={home.architecture} aria-label="Bohlal-itech technology stack">
            <div className={home.architectureHeader}>
              <span>Our building blocks</span>
              <strong>One connected technology system.</strong>
            </div>
            <div className={home.brickWall}>
              {techBricks.map(([label, category]) => (
                <div className={home.techBrick} key={label}>
                  <strong>{label}</strong>
                  <small>{category}</small>
                </div>
              ))}
            </div>
            <div className={home.architectureFooter}>
              <strong>Systems connect. Products ship. People benefit.</strong>
              <span>Bohlal-itech architecture</span>
            </div>
          </div>
        </div>
      </section>

      <section className={home.capabilityRail} aria-label="Core capabilities">
        <article>
          <span>01 · Strategy</span>
          <strong>Strategy & innovation</strong>
          <p>Turn an idea, workflow or problem into a practical roadmap.</p>
        </article>
        <article>
          <span>02 · Product</span>
          <strong>Digital products</strong>
          <p>Web, mobile and operational experiences designed around real users.</p>
        </article>
        <article>
          <span>03 · Intelligence</span>
          <strong>AI & automation</strong>
          <p>Useful intelligence embedded inside actual systems and workflows.</p>
        </article>
        <article>
          <span>04 · Infrastructure</span>
          <strong>Cloud & integrations</strong>
          <p>Connected, deployable software built to keep evolving.</p>
        </article>
      </section>

      <section className={home.systemSection}>
        <div className={home.systemInner}>
          <div className={home.systemIntro}>
            <span>Digital architecture</span>
            <h2>The bricks are the stack. The value is how they connect.</h2>
            <p>
              A framework, model or cloud service is not the product. Bohlal-itech combines the right pieces into systems that make sense to the people who actually have to use them.
            </p>
          </div>
          <div className={home.systemMap}>
            {architectureLayers.map((layer) => (
              <article key={layer.number}>
                <div className={home.systemIndex}>{layer.number}</div>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.body}</p>
                  <div className={home.systemTags}>
                    {layer.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="doctorsRecruit" aria-labelledby="doctors-recruit-title">
        <div className="doctorsRecruitGrid" aria-hidden="true" />
        <div className="doctorsRecruitInner">
          <div className="doctorsRecruitCopy">
            <span className="localEyebrow"><HeartPulse size={15} /> Healthcare innovation</span>
            <h2 id="doctors-recruit-title">Doctors, we want <span>YOU.</span></h2>
            <p>You understand the clinical problems worth solving. We know how to turn ideas into useful digital products. Bring the workflow problem, patient-experience gap, dashboard idea, remote-care concept or practice challenge. Bohlal-itech can help shape the technology around it.</p>
            <div className="localButtonRow">
              <Link href="/medical-professionals" className="localPrimary">I have an idea <ArrowRight size={16} /></Link>
              <Link href="/contact?audience=medical-professional&intent=product-idea" className="localSecondary">Talk to us</Link>
            </div>
          </div>
          <div className="doctorsRecruitPanel">
            <span>Built for healthcare ideas</span>
            <ul>
              <li>Patient portals & digital journeys</li>
              <li>Clinician dashboards & workflow tools</li>
              <li>Practice and operational software</li>
              <li>Remote-care and monitoring concepts</li>
            </ul>
            <small>Johannesburg · Gauteng · South Africa</small>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionIntro
            eyebrow="What we do"
            note="systems built around the problem"
            title="Product, software and support under one roof."
            body="From the first idea to deployment and ongoing improvement, we connect design, development, hosting and practical technology support."
          />
          <div className={styles.grid3}>
            {services.map(({ slug, title, short, icon: Icon }) => (
              <article className={styles.card} key={slug}>
                <div className={styles.cardIcon}><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{short}</p>
                <Link className={styles.cardLink} href={`/services/${slug}`}>Learn more <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="localServiceArea" aria-labelledby="local-service-title">
        <div className="localServiceInner">
          <span className="localEyebrow">Built in South Africa</span>
          <h2 id="local-service-title">Web development, custom software and intelligent systems for Johannesburg, Gauteng and beyond.</h2>
          <p>Bohlal-itech works with businesses and healthcare professionals looking for website development, custom software, web applications, cloud infrastructure, automation and practical digital support. We serve Johannesburg and the wider Gauteng market while supporting projects across South Africa.</p>
          <div className="localAreaLinks">
            <Link href="/services/website-design-development">Website development Johannesburg</Link>
            <Link href="/services/software-web-apps">Custom software Gauteng</Link>
            <Link href="/medical-professionals">Healthcare software South Africa</Link>
            <Link href="/contact">Start a project in Johannesburg</Link>
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <SectionIntro
            light
            eyebrow="Why Bohlal-itech"
            note="we stay close to the work"
            title="Technology should keep working after launch."
            body="We do not treat launch day as the finish line. Products need monitoring, maintenance, iteration and sensible decisions as the people and organisations using them evolve."
          />
          <div className={styles.grid4}>
            {differentiators.map(({ icon: Icon, title, text }) => (
              <article className={`${styles.card} ${styles.cardDark}`} key={title}>
                <div className={styles.cardIcon}><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className={styles.buttonRow}>
            <Link className={styles.primaryButton} href="/growth-support">See ongoing support <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            eyebrow="Featured work"
            note="made to be used"
            title="Real systems. Useful outcomes."
            body="Case studies should show what was actually built and why it mattered. These preview cards are ready for verified project stories as they are approved for publication."
          />
          <div className={styles.grid3}>
            {["Digital health platform", "Custom operations system", "Connected web experience"].map((title, index) => (
              <article className={styles.workCard} key={title}>
                <div className={styles.workVisual} />
                <div className={styles.workCopy}>
                  <span>{index === 0 ? "Healthcare" : index === 1 ? "Software" : "Digital product"}</span>
                  <h3>{title}</h3>
                  <p>Challenge → system design → real-world use.</p>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.buttonRow}><Link className={styles.secondaryButton} href="/portfolio">View portfolio</Link></div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionIntro
            eyebrow="Packages"
            note="clear from day one"
            title="Simple starting points. Flexible systems."
            body="Start with a defined package when the problem is familiar, then move into custom scope when the product or workflow genuinely needs it."
          />
          <div className={styles.grid3}>
            {packages.map((pkg) => (
              <article className={`${styles.priceCard} ${pkg.highlight ? styles.priceCardPopular : ""}`} key={pkg.name}>
                {pkg.highlight && <span className={styles.priceBadge}>Most popular</span>}
                <h3>{pkg.name}</h3>
                <p>{pkg.bestFor}</p>
                <div className={styles.price}>{pkg.price}</div>
                <div className={styles.monthly}>{pkg.monthly}</div>
                <ul className={styles.featureList}>{pkg.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <Link className={pkg.highlight ? styles.primaryButton : styles.secondaryButton} href="/packages">Compare packages</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionIntro
            eyebrow="Client proof"
            note="real words only"
            title="Trust should be earned, not fabricated."
            body="This section is ready for verified client testimonials, logos and case-study links. Until then, we would rather leave a truthful placeholder than invent applause from imaginary executives. Humanity has enough of that already."
          />
          <div className={styles.grid2}>
            <article className={styles.testimonial}><blockquote>“Add a verified client quote here once approved.”</blockquote><footer>Client name · Business</footer></article>
            <article className={styles.testimonial}><blockquote>“A second real testimonial belongs here when you have permission to publish it.”</blockquote><footer>Client name · Business</footer></article>
          </div>
        </div>
      </section>

      <FinalCta />
    </MarketingLayout>
  );
}
