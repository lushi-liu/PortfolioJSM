import GetInTouch from "@/src/components/GetInTouch";
import ProjectDesc from "@/src/components/ProjectDesc";
import ProjectOther from "@/src/components/ProjectOther";
import ProjectProblem from "@/src/components/ProjectProblem";
import ProjectProcess from "@/src/components/ProjectProcess";
import ProjectRole from "@/src/components/ProjectRole";
import ProjectTitle from "@/src/components/ProjectTitle";
import React from "react";

export default function Morrent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 dark:text-white-800">
      <ProjectTitle
        title="Morrent"
        titleDesc="A Car Rental Website"
        lImage="/job-image/Morrent-Laptop.svg"
        mImage="/job-image/Morrent-Mobile.svg"
        demo="https://cohort5-breaking-bugs-car-rent.vercel.app/"
        code="https://github.com/JavaScript-Mastery-PRO/Cohort5_BreakingBugs_CarRent"
      />
      <ProjectRole />
      <ProjectDesc
        desc={
          <div className="whitespace-pre-line">
            <p>
              Morent, a cutting-edge car rental application that was developed
              using the MERN stack. The app boasts a dynamic homepage that
              showcases featured vehicles, along with convenient pickup &
              drop-off location options & a comprehensive list of available
              cars.
            </p>
            <br />
            <p>
              My team and I also developed the car listing page which offers a
              search bar and various filtering options for users to find the
              perfect vehicle. Additionally, it has a car details page which
              provides users with detailed information along with suggestions
              for other recommended vehicles.
            </p>
            <br />
            <p>
              Car owners are also able to list their cars for rent through our
              Add Car page, while users can easily track their rented and
              rented-out cars through their profile page. Overall, we have
              created an intuitive and user-friendly MVP version of the platform
              that will make renting a car a breeze.
            </p>
          </div>
        }
        problem="One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals."
        image="/job-image/Morrent-ex.svg"
        figma="/job-image/Morrent-Figma.svg"
      />
      <ProjectProcess />
      <ProjectProblem />
      <ProjectOther />
      <GetInTouch />
    </main>
  );
}
