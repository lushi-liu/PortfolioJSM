import CaseCard from "@/src/components/CaseCard";
import GetInTouch from "@/src/components/GetInTouch";

export default function Casestudies() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center dark:text-white-800 md:p-24">
      <h1 className="mt-8 text-[42px] font-extrabold dark:text-white-900 md:mt-[45px] md:text-64">
        Recent Case Studies
      </h1>
      <h3 className="mt-[10px] text-[12px] text-white-500 dark:text-white-800 md:w-[600px] md:text-18">
        Dive into my recent success stories and discover how Ive helped clients
        overcome challenges, innovate, and achieve their goals
      </h3>
      <ul className="mt-16 flex flex-col md:mt-32">
        <li className="flex flex-col md:flex-row md:gap-4">
          <CaseCard
            bgcolor="bg-blue-dark"
            title="Morrent"
            desc="Car Rental Application"
          />
          <CaseCard
            bgcolor="bg-[#0BAB7C]"
            title="JobIt"
            desc="Job Finding Application"
          />
        </li>
        <li className="flex flex-col gap-4 md:flex-row">
          <CaseCard
            bgcolor="bg-blue-dark"
            title="Morrent"
            desc="Car Rental Application"
          />
          <CaseCard
            bgcolor="bg-blue-dark"
            title="Morrent"
            desc="Car Rental Application"
          />
        </li>
      </ul>

      <GetInTouch />
    </main>
  );
}
