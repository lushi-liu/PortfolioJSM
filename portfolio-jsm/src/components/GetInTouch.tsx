"use client";
import React from "react";
import Button from "./Button";
import { useMediaQuery } from "react-responsive";

const GetInTouch = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="h-[330px] w-[90%] rounded-[10px] bg-yellow-primary">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="font-bold text-black-200 md:ml-16 md:mt-12 md:w-[520px] md:text-48">
          Have a project in mind that requires technical expertise?
        </h1>
        <div className="md:mr-16 md:mt-44">
          <Button
            buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
            textColor="text-white-900 font-semibold"
            hPadding="px-4"
            width={isMobile ? "w-[310px]" : "w-[323px]"}
            height={isMobile ? "h-[47px]" : "h-[69px]"}
            extraStyles={isMobile ? "text-14" : "text-18"}
            onClick={() => {}}
            text="Get in Touch with Me"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
