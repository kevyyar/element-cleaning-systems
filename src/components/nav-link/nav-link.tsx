import { navbarLinks } from "@/constants/constants";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export function NavLink() {
  return (
    <div className={josefin.className}>
      {navbarLinks.map((link) => (
        <Link className={styles["nav-link"]} href={link.link} key={link.id}>
          {link.children}
        </Link>
      ))}
    </div>
  );
}
