"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import { ArrowRight } from "iconsax-react";
import { ProjectCardProps } from "../types";

const ProjectCard = ({ bgcolor, title }: ProjectCardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <main
      className={`${bgcolor} h-[514px] w-[90%] rounded-[10px] text-white-900 md:h-[440px] md:w-[1270px]`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="ml-6 mt-12 flex flex-col md:ml-24 md:mt-20 md:w-[50%]">
          <h1 className="text-32 font-extrabold md:text-48">{title}</h1>
          <div className="mt-3 flex flex-row">
            <Button
              buttonColor="bg-[#FFFFFF33] rounded-[6px] py-3"
              textColor="text-white-900 font-semibold"
              hPadding="px-3"
              extraStyles={"text-14 font-light"}
              onClick={() => {}}
              text="React.JS, Next.js"
            />
            <div className="ml-4">
              <Button
                buttonColor="bg-[#FFFFFF33] rounded-[6px] py-3"
                textColor="text-white-900 font-semibold"
                hPadding="px-3"
                extraStyles={"text-14"}
                onClick={() => {}}
                text="Nodejs, MongoDB"
              />
            </div>
          </div>
          <div className="mt-3 text-18 md:mt-6">
            See Project Detail
            <ArrowRight className="ml-3 inline" />
          </div>
        </div>
        <div>INSERT IMAGE HERE</div>
      </div>
    </main>
  );
};

export default ProjectCard;
