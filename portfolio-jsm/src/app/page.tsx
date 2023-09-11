import Education from "../components/Education";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 dark:text-white-800">
      <Hero />
      <Skills />
      <Service />
      <Education />
    </main>
  );
}
