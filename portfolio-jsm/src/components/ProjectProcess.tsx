"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import useThemeState from "@/src/store/themeStore";

const ProjectProcess = () => {
  const { theme } = useThemeState();
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const iS = isMobile ? 25 : 50; // icon size
  return (
    <main className=" w-full bg-white-900 dark:bg-black-200 dark:text-white-900">
      <br />
      <div className="ml-4 md:ml-[20%]">
        <h3 className="mt-10 text-14 font-semibold text-blue-light dark:text-blue-dark md:mt-20 md:text-[16px] ">
          Way of work
        </h3>
        <h3 className="mt-3 text-20 font-semibold  md:text-24">My Process</h3>
      </div>
      <ul className="mt-6 flex flex-col justify-center md:ml-[20%] md:mt-12 md:flex-row md:justify-start">
        <li className="flex flex-row justify-center">
          <div>
            <div className="mr-12 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-24">
              <Image
                src={
                  theme === "dark" ? "/process/def1.svg" : "/process/def.svg"
                }
                alt=""
                width={iS}
                height={iS}
              />
            </div>
            <h3 className="ml-1 mt-3 text-14 font-bold md:ml-3 md:mt-6 md:text-20">
              Definition
            </h3>
          </div>
          <div>
            <div className="mr-12 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-24">
              <Image
                src={
                  theme === "dark"
                    ? "/process/design1.svg"
                    : "/process/design.svg"
                }
                alt=""
                width={iS}
                height={iS}
              />
            </div>
            <h3 className="ml-1 mt-3 text-14 font-bold md:ml-3 md:mt-6 md:text-20">
              Design
            </h3>
          </div>
          <div>
            <div className="mr-12 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-24">
              <Image
                src={
                  theme === "dark" ? "/process/plan1.svg" : "/process/plan.svg"
                }
                alt=""
                width={iS}
                height={iS}
              />
            </div>
            <h3 className="ml-1 mt-3 text-14 font-bold md:ml-3 md:mt-6 md:text-20">
              Planning
            </h3>
          </div>
        </li>
        <li className="mb-8 flex flex-row justify-center md:mb-20">
          <div>
            <div className="mr-12 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-24">
              <Image
                src={
                  theme === "dark" ? "/process/dev1.svg" : "/process/dev.svg"
                }
                alt=""
                width={iS}
                height={iS}
              />
            </div>
            <h3 className="ml-1 mt-3 text-14 font-bold md:ml-3 md:mt-6 md:text-20">
              Development
            </h3>
          </div>
          <div>
            <div className="mr-12 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-24">
              <Image
                src={
                  theme === "dark"
                    ? "/process/deploy1.svg"
                    : "/process/deploy.svg"
                }
                alt=""
                width={iS}
                height={iS}
              />
            </div>
            <h3 className="ml-1 mt-3 text-14 font-bold md:ml-3 md:mt-6 md:text-20">
              Deployment
            </h3>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default ProjectProcess;
