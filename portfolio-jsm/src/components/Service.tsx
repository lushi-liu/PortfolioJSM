import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mt-8 text-[36px] font-semibold md:mt-16 md:text-48">
        What service do I provide
      </h2>
      <div className="mt-24 justify-center">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
