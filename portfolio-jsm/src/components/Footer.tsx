"use client";
import React from "react";
import { Linkedin, Github } from "./Icons";

const Footer = () => {
  return (
    <div className="mx-12 mt-8 flex flex-col justify-between text-14 text-black-400 dark:text-white-800 md:mt-16 md:flex-row md:text-18">
      <p className="mb-8">(c) 2023 Lushi, All right reserved</p>
      <div className="mb-8 flex flex-row items-center justify-center">
        <a
          className="mr-4 "
          href="https://www.linkedin.com/in/lushiliu/"
          target="_blank"
        >
          <Linkedin />
        </a>
        <a className="mr-4" href="https://github.com/lushi-liu" target="_blank">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Footer;
