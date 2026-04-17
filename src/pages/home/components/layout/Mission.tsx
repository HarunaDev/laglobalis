import PillarCard from "../ui/PillarCard";
import { Lightbulb, Sparkles, BadgeCheck, Scale } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <h4 className="text-primaryColor text-sm md:text-lg font-bold mb-3">
          Our Philosophy
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight lg:w-[400px] md:w-[400px] w-[260px] mb-16">
          The Four Pillars of{" "}
          <span className="text-primaryColor italic">Illumination</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        <PillarCard
          title="Knowledge"
          description="Light is knowledge – empowering minds"
          icon={Lightbulb}
        />
        <PillarCard
          title="Creativity"
          description="Light is creativity – inspiring expression"
          icon={Sparkles}
        />
        <PillarCard
          title="Excellence"
          description="Light is excellence – delivering premium experiences"
          icon={BadgeCheck}
        />
        <PillarCard
          title="Integrity"
          description="Light is truth – building trust and integrity"
          icon={Scale}
        />
      </div>
      </div>
    </section>
  );
}
