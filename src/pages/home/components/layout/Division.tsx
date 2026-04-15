import DivisionCard from "../ui/DivisionCard.js";

export default function Divisions() {
  return (
    <section id="divisions" className="py-16">
      <h2 className="text-center text-5xl mb-16 text-primaryColor">
        Our Core Divisions
      </h2>

      <h4 className="px-20 text-xl mb-12">Through our divisions, we bring light into:</h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
        <DivisionCard
          title="The Mind"
          subtitle=""
          description="Education and personal development"
        />
        <DivisionCard
          title="The Table"
          subtitle=""
          description="Taste, celebration, and hospitality"
        />
        <DivisionCard
          title="The Culture"
          subtitle=""
          description="Creativity, art, and entertainment"
        />
        <DivisionCard
          title="The Movement"
          subtitle=""
          description="Transport, logistics, and connection"
        />
        <DivisionCard
          title="The Environment"
          subtitle=""
          description="Cleanliness, hygiene, and care"
        />
        
      </div>
    </section>
  );
}