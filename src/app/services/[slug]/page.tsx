import { cleaningServices } from "@/constants/constants";
import Image from "next/image";
import styles from "./page.module.css"; // Assuming you have a CSS module

export default function Page({ params }: { params: { slug: string } }) {
  const service = cleaningServices.find((s) => s.slug === params.slug);

  if (!service) return <h1>no service found!</h1>;

  return (
    <div>
      <div className={styles.hero}>
        <Image
          src={service.image}
          alt={service.service}
          objectFit="cover"
          fill
        />
        <h1 className={styles.heroTitle}>{service.service}</h1>
      </div>
      <div className={styles.description}>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
