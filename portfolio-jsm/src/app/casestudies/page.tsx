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
      <GetInTouch />
    </main>
  );
}
