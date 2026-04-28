import type { JSX } from "react";

type Level = {
  name: string;
  price: string;
  category: "Beginner" | "Intermediate";
};

const levels: Level[] = [
  { name: "A1", price: "₦5,000/hr", category: "Beginner" },
  { name: "A2", price: "₦5,500/hr", category: "Beginner" },
  { name: "B1", price: "₦7,000/hr", category: "Intermediate" },
  { name: "B2", price: "₦8,000/hr", category: "Intermediate" },
];

export default function Levels(): JSX.Element {
  return (
    <section id="levels" className="bg-[#1A2340] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-light">
          Our Levels <span className="italic text-[#D4AF5A]">& Fees</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {levels.map((level) => (
            <div
              key={level.name}
              className="border border-[#B8973A]/30 p-6 hover:translate-y-[-4px] transition"
            >
              <p className="text-xs uppercase tracking-widest text-[#D4AF5A]">
                {level.category}
              </p>

              <h3 className="text-3xl mt-2">{level.name}</h3>

              <p className="text-[#D4AF5A] mt-4">{level.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-300 bg-primaryColor/10 px-4 py-3">
          Minimum of <strong>3 hours/week</strong> required for steady progress.
        </p>

      </div>
    </section>
  );
}