"use client";

import styles from "./navbar.module.css";
import { Button, NavLink } from "@/components";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScreenSize } from "@/components/hooks/useScreenSize";
import { TfiMenu } from "react-icons/tfi";

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { width } = useScreenSize();

  const isMobileMenu = width !== undefined && width < 768;

  const onOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className={styles["main-nav"]}>
      <Link href={"/"}>
        <Image
          src={"/images/ecs-logo-white.svg"}
          width={130}
          height={130}
          alt={"logo"}
        />
      </Link>
      {isMobileMenu ? (
        <>
          <TfiMenu size={28} color={"#3fc1aa"} onClick={onOpenMobileMenu} />
          <div
            className={`${styles["mobile-menu"]} ${
              openMobileMenu ? styles["open"] : ""
            }`}
          >
            <div>
              <NavLink />
            </div>
            <Button href={"/contact"} className={styles.button}>
              Request a Quote
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <NavLink />
          </div>
          <Button href={"/contact"}>Request a Quote</Button>
        </>
      )}
    </nav>
  );
}
