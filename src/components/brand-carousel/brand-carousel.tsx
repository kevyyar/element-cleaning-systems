"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./brand-carousel.module.css";
import { CarouselItem } from "@/components";
import { cardDetails } from "@/constants/constants";

export const BrandCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth / 2; // Since items are duplicated
      const viewWidth = carouselRef.current.offsetWidth;
      const animationDuration = (totalWidth / viewWidth) * 10; // Adjust 10 to control speed

      carouselRef.current.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-track"]} ref={carouselRef}>
        {[...cardDetails, ...cardDetails].map((item, index) => (
          <CarouselItem
            key={`${item.imgUrl}-${index}`}
            imgUrl={item.imgUrl}
            imgTitle={item.title}
          />
        ))}
      </div>
    </div>
  );
};
