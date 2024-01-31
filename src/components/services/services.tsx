"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import styles from "./services.module.css";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { Button } from "@/components";

interface CardProps {
  id: string;
  image: string;
  service: string;
  description: string;
  cta: string;
}

interface SwiperCarouselProps {
  cards: CardProps[];
}

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export function Services({ cards }: SwiperCarouselProps) {
  return (
    <section className={styles.carouselContainer}>
      <h3 className={`${styles.header} ${josefin.className}`}>
        Services We Provide
      </h3>
      <div className={styles.carousel} style={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop
          // navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <Image
                  src={card.image}
                  alt={card.service}
                  className={styles.cardImage}
                  width={400}
                  height={300}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardService}>{card.service}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Button href={"/"} className={styles.ctaButton}>
                    Learn More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
