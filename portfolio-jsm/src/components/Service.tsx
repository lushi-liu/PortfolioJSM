import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-8 text-center text-[36px] font-bold md:mt-16 md:text-48">
        What service do I provide
      </h2>
      <div className="mt-24 flex flex-col justify-center md:flex-row">
        <div className="mx-3 mb-6">
          <ServiceCard
            im="./mdi_design.svg"
            title="Analytics & SEO"
            desc="Implement tracking & analytics tools to monitor website performance & improve SEO."
            select={false}
          />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard
            im="./arrow.svg"
            title="Front-End Dev"
            desc="Front-end dev includes creating the user interface and interactive elements of websites and apps."
            select={false}
          />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard
            im="./ph_code-fill.svg"
            title="Back-End Dev"
            desc="Back-end includes building the server-side functionality that powers websites & applications."
            select={false}
          />
        </div>
        <div className="mx-3 mb-6">
          <ServiceCard
            im="./webop.svg"
            title="Web Optimization"
            desc="Web optimization focuses on improving website performance for a smoother user experience"
            select={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
