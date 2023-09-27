"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "iconsax-react";
import Button from "./Button";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:mt-12">
        <h1 className="text-[36px] font-extrabold md:mt-12 md:text-48">
          Featured <span className="magicHighlight">Projects</span>
        </h1>
        <div className="mt-12 flex flex-col items-center gap-10">
          <ProjectCard
            bgcolor="bg-[#416CEA]"
            title="Morrent - A Car Rental Application"
            lImage="/job-image/Morrent-Laptop.svg"
            mImage="/job-image/Morrent-Mobile.svg"
            link="morrent"
            leftSide={false}
          />
          <ProjectCard
            bgcolor="bg-[#0BAB7C]"
            title="JobIT - A Job Finding Application"
            lImage="/job-image/JobIT-Laptop.svg"
            mImage="/job-image/JobIT-Mobile.svg"
            link="jobit"
            leftSide={true}
          />
          <ProjectCard
            bgcolor="bg-[#FF6934]"
            title="Hipnode - A Social Media Application"
            lImage="/job-image/Hipnode-Laptop.png"
            mImage="/job-image/Hipnode-Mobile.png"
            link="morrent"
            leftSide={false}
          />
        </div>
        <Link href="/casestudies" className="hidden md:mt-10 md:flex">
          <Button
            buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
            textColor="text-white-900 font-semibold"
            hPadding="px-4"
            width={"w-[323px]"}
            height={"h-[69px]"}
            extraStyles={"text-18"}
            text={
              <>
                See more case studies
                <ArrowRight className="ml-3 inline text-18 text-white-900" />
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
