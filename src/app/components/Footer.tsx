import Image from "next/image";
import { FC } from "react";
import banner from "@/app/assets/banner.jpg";
import Container from "./Container";

const Footer: FC = () => {
  return (
    <footer className="bg-background text-foreground">
      <Container>
        <div className="relative w-full h-[32px]">
          <Image
            className={`w-full h-[32px] object-cover object-center`}
            src={banner}
            alt="Banner"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <p className="text-sm">
                &copy; Saturn91 2024 - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
