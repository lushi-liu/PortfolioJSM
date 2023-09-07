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
      <div className="ml-6 mt-12 flex flex-col items-center md:ml-16 md:mt-16 md:flex-row">
        <div className=" flex flex-col ">
          <h3 className=" text-14 font-semibold tracking-[5px] text-blue-light dark:text-blue-dark md:text-20">
            HI, I AM LOUIS
          </h3>
          <h1 className="mt-8 text-[38px] font-bold dark:text-white-900 md:mt-[45px] md:text-64">
            Professional Web Developer based in Canada
          </h1>
          <h3 className="mt-[10px] text-[12px] text-white-500 dark:text-white-800 md:text-18">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </h3>
          <div className="mt-10 flex flex-col md:flex-row">
            <Button
              buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
              textColor="text-white-900 font-semibold"
              hPadding="px-4"
              width={isMobile ? "w-[345px]" : "w-[186px]"}
              height={isMobile ? "h-[47px]" : "h-[69px]"}
              extraStyles={isMobile ? "text-14" : "text-18"}
              onClick={() => {}}
              text="My Work"
            />
            <div className="mt-4 md:ml-8 md:mt-0">
              <Button
                buttonColor="bg-white-900 dark:bg-black-200 rounded-[9000px] py-2"
                textColor="text-white-500 dark:text-white-900 font-semibold"
                hPadding="px-4"
                width={isMobile ? "w-[345px]" : "w-[297px]"}
                height={isMobile ? "h-[47px]" : "h-[69px]"}
                extraStyles={isMobile ? "text-14" : "text-18"}
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
        <div className="mt-8 flex flex-col items-center md:ml-32 md:mt-16">
          <Image
            src="./hero-image.svg"
            alt=""
            width={isMobile ? 393 : 978}
            height={isMobile ? 262 : 595}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
