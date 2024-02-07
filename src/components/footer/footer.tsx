import { navbarLinks } from "@/constants/constants";
import Link from "next/link";
import {
  TfiFacebook,
  TfiInstagram,
  TfiTwitterAlt,
  TfiYoutube,
} from "react-icons/tfi";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <Link href={"https://facebook.com"}>
          <TfiFacebook size={30} color={"#51CBA3"} />
        </Link>
        <Link href={"https://instagram.com"}>
          <TfiInstagram size={30} color={"#51CBA3"} />
        </Link>
        <Link href={"https://twitter.com"}>
          <TfiTwitterAlt size={30} color={"#51CBA3"} />
        </Link>
        <Link href={"https://youtube.com"}>
          <TfiYoutube size={30} color={"#51CBA3"} />
        </Link>
      </div>
      <div className={styles.links}>
        {navbarLinks.map((link) => (
          <Link key={link.id} href={link.link} className={styles.link}>
            {link.children}
          </Link>
        ))}
      </div>
      <div className={styles.copyright}>
        <span>
          Copyright © {new Date().getFullYear()} - All rights reserved
        </span>
        <br />
        <span>Designed By: KevTheDev</span>
      </div>
    </footer>
  );
}
