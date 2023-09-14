import React from "react";
import ReviewCard from "./ReviewCard";
import { ArrowLeft, ArrowRight } from "iconsax-react";

const AboutMe = () => {
  return (
    <main className="mt-8 w-full bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex w-full flex-col items-center text-black-400 md:h-[100%] md:w-[100%]">
        <h3 className="mx-3 mt-12 justify-center text-center text-[36px] font-semibold text-black dark:text-white-900 md:mx-6 md:mb-14 md:mt-20 md:text-48">
          What they say about me
        </h3>
        <div className="flex flex-row md:mb-16">
          <div className="mr-6 mt-36 hidden md:flex">
            <ArrowLeft />
          </div>
          <ReviewCard
            image="./sun.svg"
            name="Louis Liu"
            title="Founder & CEO at JS Mastery"
            desc="I have had the pleasure of working with Adrian as a Software Developer and can confidently 
          say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, 
          Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. "
          />
          <div className="ml-6 mt-36 hidden md:flex">
            <ArrowRight />
          </div>
        </div>
        <div className="flex flex-row gap-10 md:hidden">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
