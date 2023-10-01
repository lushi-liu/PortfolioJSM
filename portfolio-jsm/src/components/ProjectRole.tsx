"use client";
import React from "react";
import Image from "next/image";
import { ProjectRoleProps } from "../types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ProjectRole = ({ myRole, start, end, techStack }: ProjectRoleProps) => {
  const mid = Math.ceil(techStack.length / 2);
  const splitArrayIntoRows = (arr: string | any[], rowSize: number) => {
    const rows = [];
    for (let i = 0; i < arr.length; i += rowSize) {
      rows.push(arr.slice(i, i + rowSize));
    }
    return rows;
  };

  return (
    <main className="mt-4 w-full bg-white-900 dark:bg-black-200 md:mt-6">
      <ul className="ml-4 flex flex-col md:ml-0 md:flex-row md:items-center md:justify-between">
        <li className="mt-5 flex flex-col md:ml-[20%]">
          <h3 className="mt-6 text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px]">
            My Role
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            {myRole}
          </h3>
        </li>
        <li className="mt-5 flex flex-col">
          <h3 className="text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px] ">
            Start Date
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            {start}
          </h3>
        </li>
        <li className="mt-5 flex flex-col md:mr-[20%]">
          <h3 className="text-14 font-semibold text-black-400 dark:text-white-500 md:mt-12 md:text-[16px] ">
            End Date
          </h3>
          <h3 className="mt-3 text-20 font-semibold dark:text-white-900 md:text-24">
            {end}
          </h3>
        </li>
      </ul>
      <div className="mb-8 ml-3 mt-24 flex flex-col md:mb-16 md:ml-[20%]">
        <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:mt-12 md:text-[16px] ">
          Technologies used
        </h3>
        <h3 className="mb-5 mt-3 text-[28px] font-semibold dark:text-white-900 md:mb-10 md:text-32">
          Tech Stack
        </h3>
        <div className="hidden flex-col md:flex">
          <ul className="flex flex-row">
            {techStack.slice(0, mid).map((icon, index) => (
              <li
                key={index}
                className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8"
              >
                <Image src={icon} alt="" width={50} height={50} />
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-row">
            {techStack.slice(mid).map((icon, index) => (
              <li
                key={index}
                className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8 "
              >
                <Image src={icon} alt="" width={50} height={50} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:hidden">
          {splitArrayIntoRows(techStack, 5).map((row, rowIndex) => (
            <ul key={rowIndex} className="mb-3 flex flex-row">
              {(row as string[]).map(
                (
                  icon: string | StaticImport,
                  index: React.Key | null | undefined
                ) => (
                  <li
                    key={index}
                    className="mr-3 rounded-full bg-white-800 p-4 dark:bg-black-300 md:mr-8"
                  >
                    <Image src={icon} alt="" width={25} height={25} />
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectRole;
