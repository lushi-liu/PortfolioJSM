import React from "react";

const Education = () => {
  return (
    <main className="mt-8 w-full bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex flex-col md:my-[72px] md:flex-row ">
        <div className="rounded-[10px] bg-black-200 text-white-800 dark:bg-white-800 dark:text-black-200 md:ml-[85px] md:h-[593px] md:w-[40%]">
          <h1 className="font-extrabold md:ml-[108px] md:mt-[152px] md:text-48">
            Education
          </h1>
          <h3 className="md:ml-[108px] md:mt-8 md:text-18">
            An overview of my educational background
          </h3>
        </div>
        <div className="ml-16">Education: University of Toronto</div>
      </div>
    </main>
  );
};

export default Education;
