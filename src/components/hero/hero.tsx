import styles from "./hero.module.css";
import { Button } from "@/components";

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>
        Trusted in Excellence in Commercial and Janitorial Cleaning Services
      </h1>
      <p className={styles.subtitle}>
        Your go-to source for exceptional commercial cleaning services. With our
        expertise and attention to detail, we consistently deliver outstanding
        results that exceed expectations.
      </p>
      <Button href={"/"}>Request a Quote</Button>
    </div>
  );
}
