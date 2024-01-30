"use client";

import styles from "./navbar.module.css";
import { Button, NavLink } from "@/components";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScreenSize } from "@/components/hooks/useScreenSize";
import { TfiMenu } from "react-icons/tfi";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { width } = useScreenSize();

  const isMobileMenu = width !== undefined && width < 768;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const onOpenMobileMenu = () => {
    console.log("opened");
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = `${styles["main-nav"]} ${
    scrolled ? styles["scrolled"] : ""
  }`;

  return (
    <nav className={navbarClass}>
      <Link href={"/"}>
        <Image
          src={"/ecs-logo-text.svg"}
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
              <NavLink scrolled={scrolled} />
            </div>
            <Button href={"/contact"}>Request a Quote</Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <NavLink scrolled={scrolled} />
          </div>
          <Button href={"/contact"}>Request a Quote</Button>
        </>
      )}
    </nav>
  );
}
