import { Josefin_Sans } from "next/font/google";
import styles from "./our-vision.module.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});
export function OurVision() {
  return (
    <section className={styles["our-vision-container"]}>
      <span className={`${styles.header} ${josefin.className}`}>
        Our Vision
      </span>
      <h3 className={styles.title}>Partnership. Integrity. Dependability</h3>
      <p className={styles.description}>
        A partner that communicates effectively and conducts themselves with
        utmost professionalism
      </p>
      <p className={styles.highlight}>
        A partner like <span>Element Cleaning Systems</span>
      </p>
    </section>
  );
}
