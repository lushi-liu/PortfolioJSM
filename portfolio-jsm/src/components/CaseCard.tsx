"use client";
import React from "react";
import Image from "next/image";
import { CaseCardProps } from "../types";
import { useMediaQuery } from "react-responsive";

const CaseCard = ({ bgcolor, title, desc, image }: CaseCardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className="flex h-[283px] w-[345px] flex-col md:h-[440px] md:w-[550px]">
      <div className={`${bgcolor} h-[205px] rounded-[10px] md:h-[327px]`}>
        <div className="mt-10 flex justify-center md:mt-16">
          <Image
            src={image}
            alt=""
            width={isMobile ? 283 : 445}
            height={isMobile ? 166 : 260}
          />
        </div>
      </div>
      <h3 className="ml-6 mt-2 flex text-20 font-bold md:mt-4 md:text-32">
        {title}
      </h3>
      <p className="ml-6 mt-1 flex text-14 text-white-500 md:mt-2 md:text-20">
        {desc}
      </p>
    </div>
  );
};

export default CaseCard;
