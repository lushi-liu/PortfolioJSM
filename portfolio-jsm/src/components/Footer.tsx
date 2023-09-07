import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mx-12 flex flex-col justify-between text-18 text-black-400 dark:text-white-800 md:flex-row">
      <p className="mb-8">(c) 2023 Lushi, All right reserved</p>
      <div className="mb-8 flex flex-row items-center justify-center">
        <div className="mr-4">
          <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
        </div>
        <FontAwesomeIcon icon={faGithub} width={24} height={24} />
      </div>
    </div>
  );
};

export default Footer;
