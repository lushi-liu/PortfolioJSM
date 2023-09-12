"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mx-12 flex flex-col justify-between text-14 text-black-400 dark:text-white-800 md:flex-row md:text-18">
      <p className="mb-8">(c) 2023 Lushi, All right reserved</p>
      <div className="mb-8 flex flex-row items-center justify-center">
        <a
          className="mr-4"
          href="https://www.linkedin.com/in/lushiliu/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
        </a>
        <a href="https://github.com/lushi-liu" target="_blank">
          <FontAwesomeIcon icon={faGithub} width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
