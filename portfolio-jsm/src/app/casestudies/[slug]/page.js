import { data } from "@/src/app/data";
import GetInTouch from "@/src/components/GetInTouch";
import ProjectDesc from "@/src/components/ProjectDesc";
import ProjectOther from "@/src/components/ProjectOther";
import ProjectProblem from "@/src/components/ProjectProblem";
import ProjectProcess from "@/src/components/ProjectProcess";
import ProjectRole from "@/src/components/ProjectRole";
import ProjectTitle from "@/src/components/ProjectTitle";

export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 dark:text-white-800">
      <ProjectTitle
        title={data[params.slug].title}
        titleDesc={data[params.slug].titleDesc}
        lImage={data[params.slug].lImage}
        mImage={data[params.slug].mImage}
        demo={data[params.slug].demo}
        code={data[params.slug].code}
      />
      <ProjectRole
        myRole={data[params.slug].myRole}
        start={data[params.slug].start}
        end={data[params.slug].end}
        techStack={data[params.slug].techStack}
      />
      <ProjectDesc
        desc={data[params.slug].desc}
        problem={data[params.slug].problem}
        image={data[params.slug].image}
        figma={data[params.slug].figma}
      />
      <ProjectProcess />
      <ProjectProblem
        challenge={data[params.slug].challenge}
        learning={data[params.slug].learning}
      />
      <ProjectOther
        image1={data[params.slug].image1}
        title1={data[params.slug].title1}
        desc1={data[params.slug].desc1}
        link1={data[params.slug].link1}
        image2={data[params.slug].image2}
        title2={data[params.slug].title2}
        desc2={data[params.slug].desc2}
        link2={data[params.slug].link2}
      />
      <GetInTouch />
    </main>
  );
}
