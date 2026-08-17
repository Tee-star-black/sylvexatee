import type { Metadata } from "next";

import { MarketingLayout } from "@/components/MarketingShell";
import styles from "./cookie-policy.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Sylvexa uses essential browser storage and manages optional analytics and marketing consent.",
  alternates: { canonical: "/cookie-policy" },
};

const categories = [
  {
    title: "Essential storage",
    status: "Active",
    text: "Used to remember your cookie and privacy preference so the site does not ask you on every visit. This category is necessary for the preference centre to work.",
  },
  {
    title: "Analytics",
    status: "Off by default",
    text: "Reserved for optional measurement tools that could help Sylvexa understand site usage. No analytics technology should be activated unless the visitor has allowed it.",
  },
  {
    title: "Marketing",
    status: "Off by default",
    text: "Reserved for optional advertising, remarketing, or campaign technology. This category remains disabled unless the visitor explicitly allows it.",
  },
] as const;

export default function CookiePolicyPage() {
  return (
    <MarketingLayout>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span>Privacy · Cookies · Browser storage</span>
          <h1>Cookie policy.</h1>
          <p>
            This page explains how Sylvexa uses cookies and similar browser technologies. The short version: essential preference storage is used now; optional analytics and marketing categories are kept off unless you choose to allow them.
          </p>
          <small>Last updated: 17 August 2026</small>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <span>What is used</span>
            <h2>A small consent layer, not a surveillance department.</h2>
            <p>
              Cookies are small pieces of data that websites can store in your browser. Similar technologies, including local storage, can remember settings without placing a traditional cookie. Sylvexa currently stores your consent preference in browser local storage under <code>sylvexa-cookie-consent-v1</code>.
            </p>
          </div>

          <div className={styles.grid}>
            {categories.map((category) => (
              <article className={styles.card} key={category.title}>
                <span>{category.status}</span>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <article>
              <span>Consent preference</span>
              <h2>What Sylvexa stores</h2>
              <p>
                The preference record stores whether analytics and marketing categories were allowed, plus the time the choice was saved. It does not need your name, email address, or medical information.
              </p>
            </article>
            <article>
              <span>Your controls</span>
              <h2>Change your mind</h2>
              <p>
                Use the persistent <strong>Cookie settings</strong> control at the bottom of the site to reopen the preference centre. You can accept all optional categories, reject non-essential categories, or save a custom choice.
              </p>
            </article>
            <article>
              <span>Future tools</span>
              <h2>If the stack changes</h2>
              <p>
                If Sylvexa later introduces analytics, advertising, or other non-essential tracking, those tools should be connected to the consent state before they are allowed to run. This policy should also be updated when the technology changes.
              </p>
            </article>
            <article>
              <span>Questions</span>
              <h2>Privacy contact</h2>
              <p>
                For questions about the site&apos;s privacy or cookie practices, contact <a href="mailto:hello@sylvexa.com">hello@sylvexa.com</a>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
