import DivisionCard from "../ui/DivisionCard.js";

export default function Divisions() {
  return (
    <section id="divisions" className="py-16">
      <h2 className="text-center text-5xl mb-4 text-primaryColor">
        Our Core Divisions
      </h2>

      <h4 className="text-center text-lg mb-12">Through our divisions, we bring light into:</h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
        <DivisionCard
          title="The Mind"
          subtitle=""
          description="Education and personal development"
          image="src/assets/academy.png"
        />
        <DivisionCard
          title="The Table"
          subtitle=""
          description="Taste, celebration, and hospitality"
          image="src/assets/table.png"
        />
        <DivisionCard
          title="The Culture"
          subtitle=""
          description="Creativity, art, and entertainment"
          image="src/assets/culture.png"
        />
        <DivisionCard
          title="The Movement"
          subtitle=""
          description="Transport, logistics, and connection"
          image="src/assets/movement.png"
          className="lg:col-span-2"
        />
        <DivisionCard
          title="The Environment"
          subtitle=""
          description="Cleanliness, hygiene, and care"
          image="src/assets/clean.png"
        />
        
      </div>
    </section>
  );
}