"use client";

import {
  ArrowRight,
  Braces,
  Code2,
  Layers3,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

import styles from "./SylvexaTechHero.module.css";

const capabilities = [
  { icon: MonitorSmartphone, title: "Web experiences", detail: "Fast, responsive, intentional" },
  { icon: Code2, title: "Software systems", detail: "Built for real workflows" },
  { icon: Workflow, title: "Connected operations", detail: "Tools that work together" },
  { icon: Layers3, title: "Product engineering", detail: "From interface to infrastructure" },
];

const codeLines = [
  "const product = build({",
  "  clarity: true,",
  "  performance: 'high',",
  "  experience: 'intentional',",
  "});",
];

export default function SylvexaTechHero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="sylvexa-hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <motion.div
        className={styles.blueprint}
        aria-hidden="true"
        initial={{ opacity: 0, x: 44, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.windowFrame}>
          <div className={styles.windowBar}>
            <span /><span /><span />
            <small>sylvexa.system</small>
          </div>

          <div className={styles.canvas}>
            <div className={styles.diagram}>
              <div className={`${styles.node} ${styles.nodeOne}`}>WEB</div>
              <div className={`${styles.node} ${styles.nodeTwo}`}>APP</div>
              <div className={`${styles.node} ${styles.nodeThree}`}>API</div>
              <div className={`${styles.node} ${styles.nodeFour}`}>DATA</div>
              <svg viewBox="0 0 520 360" role="presentation">
                <motion.path d="M92 88 C190 88 190 160 264 160" fill="none" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, delay: 0.2 }} />
                <motion.path d="M264 160 C350 160 348 92 438 92" fill="none" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, delay: 0.4 }} />
                <motion.path d="M264 160 C264 238 210 266 150 266" fill="none" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, delay: 0.6 }} />
                <motion.path d="M264 160 C264 236 334 266 410 266" fill="none" stroke="currentColor" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.3, delay: 0.8 }} />
              </svg>
            </div>

            <div className={styles.codePanel}>
              <div className={styles.codeLabel}><Braces size={13} /> build.ts</div>
              {codeLines.map((line, index) => (
                <motion.code
                  key={line}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + index * 0.09 }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>{line}
                </motion.code>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.systemTag}>SYSTEM / 01</div>
        <div className={styles.systemTagSecondary}>BUILD STATUS · ACTIVE</div>
      </motion.div>

      <motion.div
        className={styles.copy}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>
          <span />
          Digital products · software · web
        </div>

        <h1 id="sylvexa-hero-title" className={styles.title}>
          <span>Shaping</span>
          <strong>Extraordinary</strong>
        </h1>

        <p className={styles.kicker}>Thoughtful technology, engineered to move.</p>

        <p className={styles.description}>
          Sylvexa designs and builds websites, software systems, and digital products
          that are clear, fast, useful, and made to work beautifully in the real world.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#building">
            Explore Sylvexa <ArrowRight size={17} />
          </a>
          <a className={styles.secondaryAction} href="/lab">
            Enter the Lab <ArrowRight size={17} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className={styles.capabilityStrip}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div className={styles.capability} key={item.title}>
              <div className={styles.capabilityIcon}><Icon size={18} strokeWidth={1.5} /></div>
              <div><strong>{item.title}</strong><span>{item.detail}</span></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
