"use client";

import { useState } from "react";
import { cleaningServices, navbarLinks } from "@/constants/constants";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { Josefin_Sans } from "next/font/google";
import { TfiAngleDown } from "react-icons/tfi";
import { useScreenSize } from "@/components/hooks/useScreenSize";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500", "300"],
});

export function NavLink() {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const { width } = useScreenSize();

  return (
    <div className={`${josefin.className} ${styles["link-container"]}`}>
      {navbarLinks.map((link) => (
        <div
          key={link.id}
          onMouseEnter={() =>
            width && width < 768
              ? null
              : setIsServicesHovered(link.children === "Services")
          }
          onMouseLeave={() =>
            width && width < 768 ? null : setIsServicesHovered(false)
          }
        >
          <Link className={styles["nav-link"]} href={link.link}>
            {link.children === "Services" ? (
              <div className={styles["dropdown-link"]}>
                {link.children}
                {width && width < 768 ? null : (
                  <TfiAngleDown size={16} style={{ marginLeft: "8px" }} />
                )}
                {isServicesHovered && (
                  <div className={styles.dropdown}>
                    {cleaningServices.map((service) => (
                      <Link
                        href={`/services/${service.slug}`}
                        key={service.id}
                        className={styles["dropdown-item"]}
                      >
                        <h4 className={styles["service-name"]}>
                          {service.service}
                        </h4>
                        <p className={styles["service-description"]}>
                          {service.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>{link.children}</>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
