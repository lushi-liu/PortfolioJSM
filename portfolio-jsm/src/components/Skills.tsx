"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const iS = isMobile ? 25 : 50; // icon size

  return (
    <main className="mt-8 w-full bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex w-full flex-col items-center text-black-400 md:h-[100%] md:w-[100%]">
        <h3 className="magicHighlight mt-12 text-[36px] font-semibold text-black dark:text-white-900 md:mt-20 md:text-48">
          My Skills
        </h3>
        <div className="flex flex-col md:flex-row">
          <div className="mt-4 flex flex-row md:mt-10">
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./js.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./react.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./nextjs.svg" alt="" width={iS} height={iS} />
            </div>
          </div>
          <div className="mt-4 flex flex-row md:mt-10">
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./mongodb.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./ts.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./nodejs.svg" alt="" width={iS} height={iS} />
            </div>
          </div>
        </div>
        <div className="mb-20 flex flex-col md:flex-row">
          <div className="mt-4 flex flex-row md:mt-10">
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./ex.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./tailwind.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./nextjs.svg" alt="" width={iS} height={iS} />
            </div>
          </div>
          <div className="mt-4 flex flex-row md:mt-10">
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./html.svg" alt="" width={iS} height={iS} />
            </div>
            <div className="mr-3 rounded-full bg-white-800 p-5 dark:bg-black-300 md:mr-8">
              <Image src="./css.svg" alt="" width={iS} height={iS} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
