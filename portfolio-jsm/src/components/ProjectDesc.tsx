"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ProjectDescProps } from "../types";

const ProjectDesc = ({ desc, problem, image, figma }: ProjectDescProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="flex min-h-screen flex-col items-center font-bold dark:text-white-800">
      <h3 className="mx-3 my-8 whitespace-pre-line text-14 text-white-500 dark:text-white-800 md:mx-[20%] md:my-[5%] md:text-20">
        {desc.map((text, index) => (
          <p key={index} className="mb-4 md:mb-5 ">
            {text}
          </p>
        ))}
      </h3>
      <div className="bg-white-900 dark:bg-black-200">
        <div className="mx-4 mt-8 flex flex-col justify-start md:mx-[20%] md:mt-24">
          <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:text-[16px] ">
            Problem
          </h3>
          <h3 className="mt-3 text-[28px] font-semibold dark:text-white-900 md:text-32">
            Problem statement
          </h3>
          <h3 className="mt-4 text-14 text-white-500 dark:text-white-800 md:mt-8 md:text-20">
            {problem}
          </h3>
          <div className="mb-8 mt-3 md:mb-16 md:mt-6">
            <Image
              src={image}
              alt=""
              width={isMobile ? 348 : 879}
              height={isMobile ? 189 : 478}
            />
          </div>
        </div>
      </div>
      {figma !== "none" && (
        <div className="bg-blue-light p-0 dark:bg-blue-dark">
          <h2 className="my-4 text-center text-14 text-white-900 md:my-8 md:text-32">
            HIGH-FIDELITY FIGMA DESIGN
          </h2>
          <div className="relative mx-auto h-[250px] w-screen md:h-[100vh]">
            <Image src={figma} alt="test" layout="fill" objectFit="cover" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDesc;
