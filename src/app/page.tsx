import { OurVision, ServicesCarousel, VideoBg } from "@/components";
import { cleaningServices } from "@/constants/constants";

export default function Home() {
  return (
    <>
      <VideoBg />
      <OurVision />
      <ServicesCarousel cards={cleaningServices} />
    </>
  );
}
