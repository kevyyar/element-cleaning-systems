import { Services, VideoBg } from "@/components";
import { cleaningServices } from "@/constants/constants";

export default function Home() {
  return (
    <>
      <VideoBg />
      <Services cards={cleaningServices} />
    </>
  );
}
