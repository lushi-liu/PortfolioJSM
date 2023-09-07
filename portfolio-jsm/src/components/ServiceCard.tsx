import React from "react";
import Image from "next/image";

const ServiceCard = () => {
  const im = "./arrow.svg";
  const title = "Front-End Dev";
  const desc =
    "Front-end dev includes creating the user interface and interactive elements of websites and apps.";
  // const select = true
  return (
    <div className="flex h-[265px] w-[287px] flex-col bg-white-900 shadow-lg dark:bg-black-200">
      <div className="mb-10 ml-4 mt-4 w-[62px] rounded-[10px] bg-blue-light p-4 dark:bg-blue-dark">
        <Image src={im} alt="" width={24} height={24} />
      </div>
      <h3 className="mb-2 ml-4 text-24 font-semibold">{title}</h3>
      <p className="ml-4 text-14 text-white-500 dark:text-white-800">{desc}</p>
    </div>
  );
};

export default ServiceCard;
