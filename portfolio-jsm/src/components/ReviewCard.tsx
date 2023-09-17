"use client";
import React from "react";
import Image from "next/image";
import { ReviewProps } from "../types";
import { useMediaQuery } from "react-responsive";

const ReviewCard = ({ image, desc, name, title }: ReviewProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="flex flex-col md:w-[1137px] md:flex-row">
      <div className="items-center justify-center">
        <Image
          src={image}
          alt=""
          width={isMobile ? 200 : 328}
          height={isMobile ? 200 : 328}
        />
      </div>
      <div className="mx-3 flex flex-col text-[16px] md:text-24">
        <div className="mt-4">STARS</div>
        <p className="mt-3 md:mt-5 md:w-[748px]">{desc}</p>
        <h1 className="mt-3 font-bold text-black-300 dark:text-white-900 md:mt-6">
          - {name}
        </h1>
        <h1 className="mt-2">{title}</h1>
      </div>
    </main>
  );
};

export default ReviewCard;
