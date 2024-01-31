import styles from "./video-bg.module.css";
import { Hero } from "@/components";
export function VideoBg() {
  return (
    <main className={styles["video-container"]}>
      <span className={styles["video-overlay"]} />
      <video
        src={require("../../../public/cleaning-vid.mp4")}
        autoPlay
        muted
        loop
        className={styles.video}
      />
      <Hero />
    </main>
  );
}
