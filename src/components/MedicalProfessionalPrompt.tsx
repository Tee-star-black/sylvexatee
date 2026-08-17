"use client";

import Link from "next/link";
import { ArrowUpRight, HeartPulse, X } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./MedicalProfessionalPrompt.module.css";

const DISMISSED_KEY = "sylvexa-medical-professional-prompt-dismissed-v2";

export default function MedicalProfessionalPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISSED_KEY) === "1") return;

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= 0.18) reveal();
    };

    const timer = window.setTimeout(reveal, 4000);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(DISMISSED_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className={styles.prompt} role="dialog" aria-labelledby="medical-prompt-title" aria-describedby="medical-prompt-copy" aria-live="polite">
      <div className={styles.signal} aria-hidden="true">
        <span className={styles.signalLine} />
        <span className={styles.iconFrame}><HeartPulse size={19} /></span>
      </div>

      <button className={styles.closeButton} type="button" onClick={dismiss} aria-label="Dismiss medical professional message">
        <X size={16} />
      </button>

      <span className={styles.kicker}>For healthcare innovators</span>
      <h2 id="medical-prompt-title">Medical professional with an idea?</h2>
      <span className={styles.script}>let&apos;s turn it into something useful</span>
      <p id="medical-prompt-copy">
        If you have an idea for a patient platform, clinician dashboard, practice workflow, remote-care tool, or something entirely new, Sylvexa can help shape it into a practical digital product.
      </p>

      <div className={styles.actions}>
        <Link href="/contact?audience=medical-professional&intent=product-idea" className={styles.primaryAction} onClick={dismiss}>
          Build it with us <ArrowUpRight size={15} />
        </Link>
        <Link href="/services/software-web-apps" className={styles.secondaryAction} onClick={dismiss}>
          Explore software
        </Link>
      </div>
    </aside>
  );
}
