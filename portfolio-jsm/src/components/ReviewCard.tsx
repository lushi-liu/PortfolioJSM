"use client";
import React from "react";
import Image from "next/image";
import { ReviewProps } from "../types";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

const ReviewCard = ({ image, desc, name, title }: ReviewProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <motion.main
      className="flex flex-col md:w-[1137px] md:flex-row"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
    >
      <div className="items-center justify-center">
        <AnimatePresence>
          <Image
            src={image}
            alt=""
            width={isMobile ? 200 : 328}
            height={isMobile ? 200 : 328}
            className="rounded-[10px]"
          />
        </AnimatePresence>
      </div>
      <div className="mx-3 flex flex-col text-[16px] md:text-24">
        <div className="mt-4 flex flex-row gap-1">
          {[1, 2, 3, 4, 5].map((index) => (
            <Image key={index} src="/star.svg" alt="" width={20} height={20} />
          ))}
        </div>
        <p className="mt-3 md:mt-5 md:w-[748px]">{desc}</p>
        <h1 className="mt-3 font-bold text-black-300 dark:text-white-900 md:mt-6">
          - {name}
        </h1>
        <h1 className="mt-2">{title}</h1>
      </div>
    </motion.main>
  );
};

export default ReviewCard;
