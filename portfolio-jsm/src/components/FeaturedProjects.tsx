"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "iconsax-react";
import Button from "./Button";

const FeaturedProjects = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:mt-12">
        <h1 className="text-[36px] font-extrabold md:mt-12 md:text-48">
          Featured Projects
        </h1>
        <div className="mt-12 flex flex-col items-center gap-10">
          <ProjectCard
            bgcolor="bg-[#416CEA]"
            title="Morrent - A Car Rental Application"
          />
          <ProjectCard
            bgcolor="bg-[#0BAB7C]"
            title="JobIT - A Job Finding Application"
          />
          <ProjectCard
            bgcolor="bg-[#FF6934]"
            title="Morrent - A Car Rental Application"
          />
        </div>
        <div className="hidden md:mt-10 md:flex">
          <Button
            buttonColor="bg-blue-light dark:bg-blue-dark rounded-[9000px] py-2"
            textColor="text-white-900 font-semibold"
            hPadding="px-4"
            width={"w-[323px]"}
            height={"h-[69px]"}
            extraStyles={"text-18"}
            onClick={() => {}}
            text={
              <>
                See more case studies
                <ArrowRight className="ml-3 inline text-18 text-white-900" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
