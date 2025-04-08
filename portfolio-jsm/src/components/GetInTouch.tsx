"use client";
import React from "react";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

const GetInTouch = () => {
  const isMobile = useMediaQuery({ maxWidth: 1440 });
  return (
    <main className="bg-yellow-primary mt-10 h-[311px] w-[90%] items-center rounded-[10px] text-center md:h-[330px]">
      <div className="flex flex-col justify-between md:flex-row">
        <h1 className=" text-black-200 md:text-48 mt-20 font-bold md:ml-16 md:mt-12 md:w-[520px]">
          Have a project in mind that requires technical expertise?
        </h1>
        <Link href="/contact" className="mt-2 md:mr-16 md:mt-44">
          <Button
            buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
            textColor="text-white-900 font-semibold"
            hPadding="px-4"
            width={isMobile ? "w-[310px]" : "w-[323px]"}
            height={isMobile ? "h-[47px]" : "h-[69px]"}
            extraStyles={isMobile ? "text-14" : "text-18"}
            onClick={() => {}}
            text={
              <>
                Get in Touch with Med
                <ArrowRight className="text-18 text-white-900 ml-3 inline" />
              </>
            }
          />
        </Link>
      </div>
    </main>
  );
};

export default GetInTouch;
