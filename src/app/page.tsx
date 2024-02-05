import {
  BrandCarousel,
  OurVision,
  ServicesCarousel,
  VideoBg,
} from "@/components";
import { cleaningServices } from "@/constants/constants";

export default function Home() {
  return (
    <>
      <VideoBg />
      <OurVision />
      <BrandCarousel />
      <ServicesCarousel cards={cleaningServices} />
    </>
  );
}
