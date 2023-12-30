"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import Link from "next/link";
import { ProjectOtherProps } from "../types";

const ProjectOther = ({
  image1,
  title1,
  desc1,
  link1,
  image2,
  title2,
  desc2,
  link2,
}: ProjectOtherProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="w-full dark:text-white-900">
      <br />
      <div className="ml-4 md:ml-[20%]">
        <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:mt-16 md:text-[16px] ">
          Projects
        </h3>
        <h3 className="mt-3 text-20 font-semibold  md:text-24">
          Other Case Studies
        </h3>
      </div>
      <ul className="mb-14 ml-4 mt-4 flex flex-col gap-6 md:mb-24 md:ml-[20%] md:mt-8 md:flex-row">
        <li className="flex h-[385px] w-[345px] flex-col rounded-[20px] shadow-xl md:h-[481px] md:w-[430px]">
          <div className="relative h-1/2 overflow-hidden rounded-t-[20px]">
            <Image
              src={image1}
              alt="Image description"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-1/2 p-4">
            <h3 className="text-20 font-semibold text-blue-light dark:text-blue-dark md:text-[24px] ">
              {title1}
            </h3>
            <p className="mb-4 line-clamp-3 text-14 text-white-500 dark:text-white-800 md:mb-8 md:text-18">
              {desc1}
            </p>
            <Link href={link1}>
              <Button
                buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
                textColor="text-white-900 font-semibold"
                hPadding="px-4"
                width={isMobile ? "w-[307px]" : "w-[382px]"}
                height={isMobile ? "h-[41px]" : "h-[48px]"}
                extraStyles={isMobile ? "text-12" : "text-14"}
                onClick={() => {}}
                text="See Case Study"
              />
            </Link>
          </div>
        </li>
        <li className="flex h-[385px] w-[345px] flex-col rounded-[20px] shadow-xl md:h-[481px] md:w-[430px]">
          <div className="relative h-1/2 overflow-hidden rounded-t-[20px]">
            <Image
              src={image2}
              alt="Image description"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-1/2 p-4">
            <h3 className="text-20 font-semibold text-blue-light dark:text-blue-dark md:text-[24px] ">
              {title2}
            </h3>
            <p className="mb-4 line-clamp-3 text-14 text-white-500 dark:text-white-800 md:mb-8 md:text-18">
              {desc2}
            </p>
            <Link href={link2}>
              <Button
                buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
                textColor="text-white-900 font-semibold"
                hPadding="px-4"
                width={isMobile ? "w-[307px]" : "w-[382px]"}
                height={isMobile ? "h-[41px]" : "h-[48px]"}
                extraStyles={isMobile ? "text-12" : "text-14"}
                onClick={() => {}}
                text="See Case Study"
              />
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default ProjectOther;
