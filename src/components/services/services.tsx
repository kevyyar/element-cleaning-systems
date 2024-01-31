// "use client";
//
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { cleaningServices } from "@/constants/constants";
// import Image from "next/image";
// import styles from "./services.module.css";
// import { Button } from "@/components";
// import { Josefin_Sans } from "next/font/google";
//
// interface ArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: () => void;
// }
//
// const josefin = Josefin_Sans({
//   subsets: ["latin"],
//   weight: ["500"],
// });
//
// function SampleNextArrow({ className, style, onClick }: ArrowProps) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#3fc1aa",
//         padding: "20px",
//         borderRadius: "50%",
//         right: "-35px",
//       }}
//       onClick={onClick}
//     />
//   );
// }
//
// function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#3fc1aa",
//         padding: "20px",
//         borderRadius: "50%",
//         left: "-35px",
//       }}
//       onClick={onClick}
//     />
//   );
// }
//
// export class Services extends Component {
//   render() {
//     const settings = {
//       className: "slider variable-width",
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       adaptiveHeight: true,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       variableWidth: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             className: "slider variable-width",
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             adaptiveHeight: true,
//             nextArrow: <SampleNextArrow />,
//             prevArrow: <SamplePrevArrow />,
//             variableWidth: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             // initialSlide: 1,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <section className={styles["slider-container"]}>
//         <h3 className={`${styles.header} ${josefin.className}`}>
//           Services We Provide
//         </h3>
//         <Slider {...settings} className={styles["slider-container"]}>
//           {cleaningServices.map((s) => {
//             return (
//               <div key={s.id} className={styles["carousel-container"]}>
//                 <div key={s.id} className={styles.card} style={{ width: 490 }}>
//                   <Image
//                     src={s.image}
//                     alt={s.service}
//                     width={400}
//                     height={300}
//                   />
//                   <h4>{s.service}</h4>
//                   <p>{s.description}</p>
//                   <Button href={"/"}>{s.cta}</Button>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </section>
//     );
//   }
// }
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
import { TfiAngleRight } from "react-icons/tfi";
import { TfiAngleLeft } from "react-icons/tfi";

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
        <div className="swiper-button image-swiper-button-prev">
          <TfiAngleRight />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <TfiAngleLeft />
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop
          navigation={
            {
              // nextEl: ".image-swiper-button-next",
              // prevEl: ".image-swiper-button-prev",
            }
          }
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
