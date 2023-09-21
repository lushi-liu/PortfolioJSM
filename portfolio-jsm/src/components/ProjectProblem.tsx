import React from "react";
import Image from "next/image";
import { ProjectProblemProps } from "../types";

const ProjectProblem = ({ challenge, learning }: ProjectProblemProps) => {
  return (
    <main className=" w-full bg-white-900 dark:bg-black-200 dark:text-white-900">
      <br />
      <div className="ml-4 md:ml-[20%]">
        <h3 className="text-14 font-semibold text-blue-light dark:text-blue-dark md:mt-16 md:text-[16px] ">
          Problems
        </h3>
        <h3 className="mt-3 text-20 font-semibold  md:text-24">
          Challenges & Learning
        </h3>
        <div className="mt-4 w-[345px] rounded-[10px] bg-white-800 p-6 dark:bg-black-300 md:mt-8 md:w-[878px] md:p-10">
          <h3 className="text-18 font-bold text-[#E15A46] md:text-20">
            CHALLENGES
          </h3>
          <ul>
            {challenge.map((text, index) => (
              <li key={index} className="mt-5 flex flex-row md:mt-8">
                <Image
                  src="/challenge.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 mt-1 self-start md:mr-4"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8 mt-3 w-[345px] rounded-[10px] bg-white-800 p-6 dark:bg-black-300 md:mb-16 md:mt-6 md:w-[878px] md:p-10">
          <h3 className="text-18 font-bold text-[#02BC7D] md:text-20">
            LEARNINGS
          </h3>
          <ul>
            {learning.map((text, index) => (
              <li key={index} className="mt-5 flex flex-row md:mt-8">
                <Image
                  src="/tick.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2 mt-1 self-start md:mr-4"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProjectProblem;
