"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ProjectDescProps } from "../types";

const ProjectDesc = ({ desc, problem, image }: ProjectDescProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="flex min-h-screen flex-col items-center font-bold dark:text-white-800">
      <h3 className="my-6 text-14 text-white-500 dark:text-white-800 md:mx-[20%] md:my-[5%] md:text-20">
        {desc}
      </h3>
      <div className="bg-white-900 dark:bg-black-200">
        <div className="ml-3 mt-24 flex flex-col justify-start md:mx-[20%]">
          <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:text-[16px] ">
            Problem
          </h3>
          <h3 className="mt-3 text-[28px] font-semibold dark:text-white-900 md:text-32">
            Problem statement
          </h3>
          <h3 className="mt-4 text-14 text-white-500 dark:text-white-800 md:mt-8 md:text-20">
            {problem}
          </h3>
          <div className="mt-3 md:mt-6">
            <Image
              src={image}
              alt=""
              width={isMobile ? 348 : 879}
              height={isMobile ? 189 : 478}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDesc;
