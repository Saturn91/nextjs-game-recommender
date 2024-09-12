import Image from "next/image";
import { FC } from "react";
import banner from "@/app/assets/banner.jpg";
import { pixelify_sans } from "@/app/styles/fonts";

const Banner: FC = () => (
  <div className="relative w-full h-[171px]">
    <Image
      className={`w-full h-[171px] object-cover object-center`}
      src={banner}
      alt="Banner"
    />
    <div className="absolute inset-0 bg-black bg-opacity-75"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className={`${pixelify_sans.className} text-neongreen `}>
        Recommended Games
      </h1>
    </div>
  </div>
);

export default Banner;
