import { Button } from "@/components";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import aboutImage from "../../../public/images/vacuum-person.jpeg";
import styles from "./about.module.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export function About() {
  return (
    <section
      className={styles.about}
      style={{
        backgroundImage: "url(/images/janitorial-bucket.jpeg)",
      }}
    >
      <span className={styles["about-overlay"]} />
      <div className={styles["about-content"]}>
        <Image
          src={aboutImage}
          alt={"vacuum person"}
          width={700}
          height={400}
        />
        <div className={styles["about-info"]}>
          <span className={`${styles.header} ${josefin.className}`}>
            About Us
          </span>
          <h3 className={`${styles.title} ${josefin.className}`}>
            A Brief Story About Element Cleaning Systems
          </h3>
          <p className={styles.description}>
            At Element Cleaning Systems, we are driven by a vision that
            transcends traditional cleaning services, aiming to elevate it into
            an exceptional experience. Though our brand is making its mark, the
            expertise behind it is steeped in over 15 years of industry
            experience led by our seasoned leadership team.
          </p>
          <br />
          <p className={styles.description}>
            Our commitment to quality-first solutions, systematized efficiency,
            and seamless communication has quickly positioned us as a trusted
            partner for businesses seeking comprehensive cleaning solutions. Our
            services span a broad spectrum, from carpet care and floor
            rejuvenation to targeted disinfection and eco-friendly practices.
          </p>
          <Button className={styles.button} href={"/"}>
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
