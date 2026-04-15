import PillarCard from "../ui/PillarCard.js";

export default function Mission() {
  return (
    <section id="mission" className="py-16">
      <h2 className="text-5xl mb-16">
        The Four Pillars of Illumination
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <PillarCard title="Knowledge" description="Learning always" />
        <PillarCard title="Creativity" description="Innovation" />
        <PillarCard title="Excellence" description="Perfection" />
        <PillarCard title="Truth" description="Integrity" />
      </div>
    </section>
  );
}