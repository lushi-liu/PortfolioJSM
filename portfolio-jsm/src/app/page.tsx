import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 dark:text-white-800 md:p-24">
      <Hero />
      <div className="my-3">example</div>
    </main>
  );
}
