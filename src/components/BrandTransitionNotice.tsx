import styles from "./BrandTransitionNotice.module.css";

export function BrandTransitionNotice() {
  return (
    <aside className={styles.notice} aria-label="Sylvexa brand transition notice">
      <div className={styles.kicker}>
        <span className={styles.signal} aria-hidden="true" />
        Brand update
      </div>
      <p>
        <strong>Sylvexa</strong>
        <span> - soon to be trading as </span>
        <strong className={styles.futureName}>Bohlal-itech</strong>
      </p>
    </aside>
  );
}
