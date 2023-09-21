"use client";
import React from "react";
import { ProjectTitleProps } from "../types";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { ArrowRight } from "iconsax-react";
import { GithubBlue, Globe } from "./Icons";

const ProjectTitle = ({
  title,
  titleDesc,
  lImage,
  mImage,
  demo,
  code,
}: ProjectTitleProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="flex flex-col items-center text-center font-bold dark:text-white-800 md:p-24">
      <h1 className="mt-10 text-14 text-blue-light dark:text-blue-dark md:text-20">
        WEB DEV PROJECT
      </h1>
      <h1 className="mt-3 text-[42px] md:mt-6 md:text-64">
        <span className="magicHighlight">{title}</span> - {titleDesc}
      </h1>
      <div className="mt-9 flex flex-row md:mt-16">
        <Image
          src={lImage}
          alt=""
          width={isMobile ? 270 : 575}
          height={isMobile ? 155 : 330}
        />
        <div className="ml-[-20px]">
          <Image
            src={mImage}
            alt=""
            width={isMobile ? 67 : 140}
            height={isMobile ? 131 : 279}
          />
        </div>
      </div>
      <div className="my-12 flex flex-row md:mb-0 md:mt-24">
        <a
          className="mx-6 mr-4 flex flex-row text-blue-light dark:text-blue-dark md:mx-20"
          href={demo}
          target="_blank"
        >
          <div className="mt-0.5 md:mt-1.5">
            <Globe />
          </div>
          <span className="ml-1 text-14 md:ml-2 md:text-20">Demo Site</span>
          <ArrowRight className="ml-1 inline md:ml-3" />
        </a>
        <a
          className="mx-6 mr-4 flex flex-row text-blue-light dark:text-blue-dark md:mx-20"
          href={code}
          target="_blank"
        >
          <div className="mt-0.5 md:mt-1.5">
            <GithubBlue />
          </div>
          <span className="ml-1 text-14 md:ml-2 md:text-20">Source Code</span>
          <ArrowRight className="ml-1 inline md:ml-3" />
        </a>
      </div>
    </main>
  );
};

export default ProjectTitle;
