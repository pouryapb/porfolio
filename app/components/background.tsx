import Image from "next/image";

import nyanCat from "@/public/nyan-cat.gif";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export default function Background() {
  return (
    <>
      <BackgroundGradientAnimation />
      <div className="absolute -bottom-10 -left-32">
        <Image priority src={nyanCat} alt="nyanCat" className="animate-nyan" />
      </div>
    </>
  );
}
