"use client";

import Link from "next/link";
import { ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "sylvexa-cookie-consent-v1";

type Preferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: Preferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Preferences>;
        setPreferences({
          essential: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
        setHasChoice(true);
      } else {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    } finally {
      setReady(true);
    }
  }, []);

  const persist = (next: Preferences) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...next, updatedAt: new Date().toISOString() }),
      );
    } catch {
      // Consent still applies for this page view even when storage is unavailable.
    }

    setPreferences(next);
    setHasChoice(true);
    setOpen(false);
    setCustomising(false);
    window.dispatchEvent(new CustomEvent("sylvexa:cookie-consent", { detail: next }));
  };

  if (!ready) return null;

  return (
    <>
      {open && (
        <aside className={styles.banner} role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-copy">
          <div className={styles.headingRow}>
            <span className={styles.icon} aria-hidden="true"><ShieldCheck size={19} /></span>
            <div>
              <span className={styles.kicker}>Privacy controls</span>
              <h2 id="cookie-consent-title">Your choice, before the tracking.</h2>
            </div>
          </div>

          <p id="cookie-consent-copy">
            Sylvexa currently uses essential browser storage for things like remembering this preference. Analytics and marketing technologies stay off unless you choose to allow them.
          </p>

          {customising && (
            <div className={styles.preferences} aria-label="Cookie preferences">
              <label className={styles.preferenceRow}>
                <span><strong>Essential</strong><small>Required for core site preferences and cannot be switched off here.</small></span>
                <input type="checkbox" checked disabled aria-label="Essential storage enabled" />
              </label>
              <label className={styles.preferenceRow}>
                <span><strong>Analytics</strong><small>Optional measurement tools, if Sylvexa adds them in future.</small></span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                />
              </label>
              <label className={styles.preferenceRow}>
                <span><strong>Marketing</strong><small>Optional advertising or campaign technologies, if used in future.</small></span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(event) => setPreferences((current) => ({ ...current, marketing: event.target.checked }))}
                />
              </label>
            </div>
          )}

          <div className={styles.actions}>
            {customising ? (
              <>
                <button className={styles.primary} type="button" onClick={() => persist(preferences)}>Save preferences</button>
                <button className={styles.secondary} type="button" onClick={() => persist(defaultPreferences)}>Reject non-essential</button>
              </>
            ) : (
              <>
                <button className={styles.primary} type="button" onClick={() => persist({ essential: true, analytics: true, marketing: true })}>Accept all</button>
                <button className={styles.secondary} type="button" onClick={() => persist(defaultPreferences)}>Reject non-essential</button>
                <button className={styles.textButton} type="button" onClick={() => setCustomising(true)}><SlidersHorizontal size={14} /> Manage preferences</button>
              </>
            )}
          </div>

          <Link className={styles.policyLink} href="/cookie-policy">Read the cookie policy</Link>
        </aside>
      )}

      {hasChoice && !open && (
        <button
          className={styles.settingsButton}
          type="button"
          onClick={() => { setCustomising(true); setOpen(true); }}
          aria-label="Open cookie settings"
        >
          <SlidersHorizontal size={14} /> Cookie settings
        </button>
      )}
    </>
  );
}
