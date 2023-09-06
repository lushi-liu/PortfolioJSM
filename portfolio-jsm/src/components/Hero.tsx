"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import { Copy } from "iconsax-react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="mt-16 flex flex-col">
          <h3 className="text-20 font-semibold tracking-[5px] text-blue-light dark:text-blue-dark">
            HI, I AM LOUIS
          </h3>
          <h1 className="mt-[45px] text-64 font-bold dark:text-white-900">
            Professional Web Developer based in Canada
          </h1>
          <h3 className="mt-[10px] text-18 text-white-500 dark:text-white-800">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </h3>
          <div className="mt-10 flex flex-row">
            <Button
              buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
              textColor="text-white-900 font-semibold"
              hPadding="px-4"
              width={isMobile ? "w-[100px]" : "w-[186px]"}
              height={isMobile ? "h-[36px]" : "h-[69px]"}
              extraStyles={isMobile ? "text-12" : "text-18"}
              onClick={() => {}}
              text="My Work"
            />
            <div className="ml-8">
              <Button
                buttonColor="bg-white-900 dark:bg-black-200 rounded-[9000px] py-2"
                textColor="text-white-500 dark:text-white-900 font-semibold"
                hPadding="px-4"
                width={isMobile ? "w-[100px]" : "w-[297px]"}
                height={isMobile ? "h-[36px]" : "h-[69px]"}
                extraStyles={isMobile ? "text-12" : "text-18"}
                onClick={() => {}}
                text={
                  <>
                    lushiliu1@gmail.com
                    <Copy className="ml-3 inline text-18 text-yellow-primary" />
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div className="ml-32 flex flex-col items-center">
          <Image src="./hero-image.svg" alt="" width={743} height={579} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
