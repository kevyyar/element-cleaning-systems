import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
import { Josefin_Sans } from "next/font/google";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export function Button({ href, className, children }: Props) {
  return (
    <Link
      className={`${styles.button} ${josefin.className} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
