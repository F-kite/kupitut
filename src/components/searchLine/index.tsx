import styles from "./styles.module.scss";

export default function SearchLine({ className }: { className?: string }) {
  return (
    <div className={`${styles.body} ${className}`}>
      <input className={styles.input} placeholder="Искать на КупиТут" />
      <button className={styles.button}>Поиск</button>
    </div>
  );
}