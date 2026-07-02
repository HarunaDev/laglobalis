import React from "react";
import Hero from "./components/cohort/layout/Hero";
import SectionHeading from "./components/cohort/ui/SectionHeading";
import ProgramOptions from "./components/cohort/layout/ProgramOptions";
import { cohortData } from "../../data/cohortData";
import InstallmentPlans from "./components/cohort/layout/InstallmentPlan";
import Timeline from "./components/cohort/layout/Timeline";
import IncludedSection from "./components/cohort/layout/IncludedSection";

type Props = {
    isHovered: boolean;
  };

function CohortPage({isHovered}: Props) {
  return (
    <>
        <main className="relative mt-24 min-h-screen text-white">

        <div
        className={`h-0 w-[40rem] absolute lg:top-[10%] top-[3%] right-[2%] -rotate-[30deg] -z-10 ${
          isHovered
            ? "shadow-[0_0_900px_30px_#453059]"
            : "shadow-[0_0_900px_30px_#E99B63]"
        }`}
      />


<div className="max-w-6xl mx-auto px-6">

    <Hero
        academy={cohortData.academy}
        title={cohortData.cohort.title}
        subtitle={cohortData.cohort.subtitle}
        description={cohortData.cohort.description}
    />

    <section className="pb-20">

        <ProgramOptions
            programmes={cohortData.programmes}
        />

        <InstallmentPlans plans={cohortData.installmentPlans} />

        <Timeline items={cohortData.timeline}/>

        <IncludedSection items={cohortData.included}/>

    </section>

</div>

</main>
    </>
  );
}

export default CohortPage;
