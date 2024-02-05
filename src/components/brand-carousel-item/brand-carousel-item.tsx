import Image from "next/image";
import styles from "../brand-carousel/brand-carousel.module.css";

interface Props {
  imgUrl: string;
  imgTitle: string;
}

export function CarouselItem({ imgUrl, imgTitle }: Props) {
  return (
    <div className={styles["carouse-card"]}>
      <Image src={imgUrl} alt={imgTitle} width={200} height={100} />
    </div>
  );
}
