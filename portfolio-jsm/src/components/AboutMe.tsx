"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ArrowLeft, ArrowRight } from "iconsax-react";

const AboutMe = () => {
  const [currCard, setCurrCard] = useState(1);

  const handlePrevCard = () => {
    currCard === 1 ? setCurrCard(3) : setCurrCard(currCard - 1);
  };
  const handleNextCard = () => {
    currCard === 3 ? setCurrCard(1) : setCurrCard(currCard + 1);
  };

  return (
    <main className="mt-8 w-full bg-white-900 dark:bg-black-200 md:mt-16">
      <div className="flex w-full flex-col items-center text-black-400 md:h-[100%] md:w-[100%]">
        <h3 className="mx-3 mt-12 justify-center text-center text-[36px] font-semibold text-black dark:text-white-900 md:mx-6 md:mb-14 md:mt-20 md:text-48">
          What <span className="magicHighlight">they say</span> about me
        </h3>
        <div className="flex flex-row md:mb-16">
          <div className="mr-6 mt-36 hidden md:flex" onClick={handlePrevCard}>
            <ArrowLeft />
          </div>
          {currCard === 1 ? (
            <ReviewCard
              image="/review-image/Adrian.png"
              name="Adrian Hajdin"
              title="Founder & CEO at JS Mastery"
              desc="I have had the pleasure of working with Lushi as a Software Developer and can confidently 
          say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, 
          Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. "
            />
          ) : currCard === 2 ? (
            <ReviewCard
              image="/review-image/Brandon.jpg"
              name="Brandon Etter"
              title="Founder & CEO at JS Mastery"
              desc="I had the pleasure of working with Louis on various projects and was consistently impressed by his self-sufficiency 
              and high-quality work. He excelled in creating clean code, well-designed components, and user-friendly 
              interfaces. Would gladly work with him again!"
            />
          ) : (
            <ReviewCard
              image="/review-image/Christopher.jpg"
              name="Christopher Soltis"
              title="Founder & CEO at JS Mastery"
              desc="Working alongside Louis on multiple projects was truly a pleasure. I was consistently impressed by his
              knack for delivering top-notch work. His ability to create clean, readable code and design exceptional components 
              and user interfaces sets him apart. I would gladly collaborate with him again."
            />
          )}

          <div className="ml-6 mt-36 hidden md:flex">
            <ArrowRight onClick={handleNextCard} />
          </div>
        </div>
        <div className="flex flex-row gap-10 md:hidden">
          <ArrowLeft onClick={handlePrevCard} />
          <ArrowRight onClick={handleNextCard} />
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
