import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Image from "next/image";

const Education = () => {
  return (
    <main className="mt-8 w-full bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex flex-col md:my-[72px] md:flex-row ">
        <div className="ml-4 h-[340px] w-[345px] rounded-[10px] bg-black-200 text-white-800 dark:bg-white-800 dark:text-black-200 md:ml-[85px] md:h-[593px] md:w-[40%]">
          <h1 className="ml-[10%] mt-[30%] text-20 font-extrabold md:ml-[108px] md:mt-[152px] md:text-48">
            Education & Work Experience
          </h1>
          <h3 className="ml-[10%] mt-3 md:ml-[108px] md:mt-8 md:text-18">
            An overview of my educational background and work experience
          </h3>
        </div>
        <ul className="ml-16">
          <li className="flex flex-col md:flex-row md:gap-16">
            <SchoolIcon className="h-20 w-20" />
            <div className="flex flex-col">
              <h1 className="text-32 font-bold md:text-48">Education</h1>
              <h3 className="text-24 font-bold text-blue-light dark:text-blue-dark md:text-32">
                University of Toronto
              </h3>
              <h3>2015-2020</h3>
              <h3 className="text-24 font-bold md:text-32">
                Machine Learning and Data Science
              </h3>
            </div>
          </li>
          <li className="mt-8 flex flex-col md:mt-16 md:flex-row md:gap-16">
            <Image src="/js.svg" alt="js" width={80} height={80} />
            <div className="flex flex-col">
              <h1 className="text-32 font-bold md:mt-20 md:text-48">
                Education
              </h1>
              <h3 className="text-24 font-bold text-blue-light dark:text-blue-dark md:text-32">
                JavaScript Mastery
              </h3>
              <h3>2023-2023</h3>
              <h3 className="text-24 font-bold md:text-32">
                Online course on React and Next.js
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Education;
