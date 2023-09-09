import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-8 text-[36px] font-bold md:mt-16 md:text-48">
        What service do I provide
      </h2>
      <div className="mt-24 flex flex-col justify-center md:flex-row">
        <div className="mx-3 mb-6">
          <ServiceCard />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Service;
