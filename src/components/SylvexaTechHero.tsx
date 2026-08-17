"use client";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  HeartPulse,
  LockKeyhole,
  MousePointer2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

import styles from "./SylvexaTechHero.module.css";

const capabilitySignals = [
  {
    icon: HeartPulse,
    title: "Continuous monitoring",
    detail: "24/7 recovery oversight",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent insights",
    detail: "Trend-led clinical intelligence",
  },
  {
    icon: ShieldCheck,
    title: "Clinician workflows",
    detail: "Actionable alerts & escalation",
  },
  {
    icon: LockKeyhole,
    title: "Enterprise grade",
    detail: "Secure. Compliant. Scalable.",
  },
];

export default function SylvexaTechHero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="sylvexa-hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.waveField} aria-hidden="true">
        <svg viewBox="0 0 900 260" role="presentation">
          <defs>
            <linearGradient id="sylvexa-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#1e83b8" stopOpacity="0" />
              <stop offset="0.4" stopColor="#5dd9ff" stopOpacity="0.85" />
              <stop offset="1" stopColor="#5dd9ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.path
              key={index}
              d={`M0 ${156 + index * 5} C120 ${72 + index * 8}, 260 ${230 - index * 4}, 390 ${130 + index * 2} S670 ${150 - index * 6}, 900 ${90 + index * 5}`}
              fill="none"
              stroke="url(#sylvexa-wave)"
              strokeWidth={index === 4 ? 1.7 : 0.7}
              initial={{ pathLength: 0.15, opacity: 0.22 }}
              animate={{
                pathLength: [0.25, 1, 0.25],
                opacity: [0.2, 0.7, 0.2],
                x: [0, 18, 0],
              }}
              transition={{
                duration: 7 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            />
          ))}
        </svg>
      </div>

      <motion.div
        className={styles.heartVisual}
        aria-hidden="true"
        initial={{ opacity: 0, x: 45, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.heartHalo} />
        <svg className={styles.heartSvg} viewBox="0 0 560 680" role="presentation">
          <defs>
            <radialGradient id="heart-fill" cx="50%" cy="45%" r="60%">
              <stop offset="0" stopColor="#173f62" stopOpacity="0.5" />
              <stop offset="0.62" stopColor="#0b2f4e" stopOpacity="0.22" />
              <stop offset="1" stopColor="#04101d" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heart-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#75e0ff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#3274b6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <motion.path
            d="M286 619C250 560 170 520 132 433C95 347 126 251 205 230C257 216 292 244 312 282C329 240 367 194 426 209C511 232 528 339 487 424C452 496 375 542 286 619Z"
            fill="url(#heart-fill)"
            stroke="url(#heart-line)"
            strokeWidth="1.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.path
            d="M314 281C307 226 305 173 331 127C352 91 387 63 424 45M340 232C377 192 414 161 468 150M270 251C251 209 220 171 176 145M248 235C232 181 223 128 237 76"
            fill="none"
            stroke="url(#heart-line)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.3 }}
          />

          {[
            [189, 280], [236, 338], [300, 304], [361, 262], [411, 319], [448, 380],
            [385, 437], [329, 492], [266, 522], [201, 454], [163, 388], [281, 402],
          ].map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="#7ce8ff"
              initial={{ opacity: 0.2, scale: 0.5 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.35, 0.75] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: index * 0.18,
              }}
            />
          ))}

          {[
            [189, 280, 236, 338], [236, 338, 300, 304], [300, 304, 361, 262],
            [361, 262, 411, 319], [411, 319, 448, 380], [448, 380, 385, 437],
            [385, 437, 329, 492], [329, 492, 266, 522], [266, 522, 201, 454],
            [201, 454, 163, 388], [163, 388, 189, 280], [236, 338, 281, 402],
            [281, 402, 385, 437], [281, 402, 201, 454], [300, 304, 281, 402],
          ].map(([x1, y1, x2, y2], index) => (
            <motion.line
              key={`${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#59cffa"
              strokeOpacity="0.35"
              strokeWidth="0.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.12, 0.5, 0.12] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.1 }}
            />
          ))}
        </svg>

        <div className={`${styles.telemetryTag} ${styles.telemetryTop}`}>
          <span>LIVE SIGNAL</span>
          <strong>97.8%</strong>
        </div>
        <div className={`${styles.telemetryTag} ${styles.telemetryBottom}`}>
          <span>RECOVERY INDEX</span>
          <strong>+12.4</strong>
        </div>
      </motion.div>

      <motion.div
        className={styles.copy}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          Intelligent recovery infrastructure
        </div>

        <h1 id="sylvexa-hero-title" className={styles.title}>
          <span>Shaping</span>
          <strong>Extraordinary</strong>
        </h1>

        <p className={styles.kicker}>
          Intelligent care. Better recovery. Stronger futures.
        </p>

        <p className={styles.description}>
          Sylvexa connects patients, clinicians and recovery data in one
          intelligent layer, turning continuous signals into useful insight and
          clearer action.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#building">
            Explore Sylvexa
            <ArrowRight size={17} />
          </a>
          <a className={styles.secondaryAction} href="#why">
            For clinicians
            <ArrowRight size={17} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className={styles.signalStrip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {capabilitySignals.map((signal) => {
          const Icon = signal.icon;

          return (
            <div className={styles.signalItem} key={signal.title}>
              <div className={styles.signalIcon}>
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <strong>{signal.title}</strong>
                <span>{signal.detail}</span>
              </div>
            </div>
          );
        })}
      </motion.div>

      <a className={styles.scrollCue} href="#building" aria-label="Scroll to explore Sylvexa">
        <MousePointer2 size={15} />
        <span>Scroll to explore</span>
      </a>

      <div className={styles.vitalLine} aria-hidden="true">
        <Activity size={14} />
        <span />
      </div>
    </section>
  );
}
