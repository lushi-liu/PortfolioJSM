"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const ProjectRole = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="mt-4 w-full bg-white-900 dark:bg-black-200 md:mt-6">
      <ul className="ml-4 flex flex-col md:ml-0 md:flex-row md:items-center md:justify-between">
        <li className="mt-5 flex flex-col md:ml-[20%]">
          <h3 className="mt-6 text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px]">
            My Role
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            Software Engineer
          </h3>
        </li>
        <li className="mt-5 flex flex-col">
          <h3 className="text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px] ">
            Start Date
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            24/01/2023
          </h3>
        </li>
        <li className="mt-5 flex flex-col md:mr-[20%]">
          <h3 className="text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px] ">
            End Date
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            02/03/2023
          </h3>
        </li>
      </ul>
      <div className="ml-3 mt-24 flex flex-col md:ml-[20%]">
        <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:mt-12 md:text-[16px] ">
          Technologies used
        </h3>
        <h3 className="mt-3 text-[28px] font-semibold dark:text-white-900 md:text-32">
          Tech Stack
        </h3>
      </div>
    </main>
  );
};

export default ProjectRole;
