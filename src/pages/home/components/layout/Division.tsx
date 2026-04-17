import DivisionCard from "../ui/DivisionCard";
import academy from "@/assets/academy.png";
import table from "@/assets/table.png";
import culture from "@/assets/culture.png";
import movement from "@/assets/movement.png";
import clean from "@/assets/clean.png";

export default function Divisions() {
  return (
    <section id="divisions" className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* <h2 className="text-center text-5xl mb-4 text-primaryColor">
        Our Core Divisions
      </h2>

      <h4 className="text-center text-lg mb-12">Through our divisions, we bring light into:</h4> */}

<div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-primaryColor font-bold">
          Our Core Divisions
        </h2>

        <h4 className="text-base sm:text-lg text-secondary">
          Through our divisions, we bring light into:
        </h4>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <DivisionCard
          title="The Mind"
          subtitle=""
          description="Education and personal development"
          image={academy}
        />
        <DivisionCard
          title="The Table"
          subtitle=""
          description="Taste, celebration, and hospitality"
          image={table}
        />
        <DivisionCard
          title="The Culture"
          subtitle=""
          description="Creativity, art, and entertainment"
          image={culture}
        />
        <DivisionCard
          title="The Movement"
          subtitle=""
          description="Transport, logistics, and connection"
          image={movement}
          className="lg:col-span-2"
        />
        <DivisionCard
          title="The Environment"
          subtitle=""
          description="Cleanliness, hygiene, and care"
          image={clean}
        />
        
      </div>
    </section>
  );
}