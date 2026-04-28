import type { JSX } from "react";

type Exam = {
    name: string;
    type: string;
    level?: string;
    description: string;
  };
  
  const exams: Exam[] = [
    {
      name: "TCF",
      type: "Test de Connaissance du Français",
      description: "General French proficiency test",
    },
    {
      name: "DELF",
      type: "Diplôme d'Études en Langue Française",
      level: "A1",
      description: "Beginner level certification",
    },
    {
      name: "DELF",
      type: "Diplôme d'Études en Langue Française",
      level: "A2",
      description: "Elementary level certification",
    },
    {
      name: "DELF",
      type: "Diplôme d'Études en Langue Française",
      level: "B1",
      description: "Intermediate level certification",
    },
    {
      name: "DELF",
      type: "Diplôme d'Études en Langue Française",
      level: "B2",
      description: "Upper-intermediate certification",
    },
  ];

export default function Exams(): JSX.Element {
  return (
    <section className="py-20 px-6 lg:px-20 bg-[#F9F5EE]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl text-secondaryColor font-light">
            International <span className="italic text-[#B8973A]">Exams</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            We prepare you for globally recognized French certifications with
            confidence and strategy.
          </p>
          <p className="mt-6 text-gray-600 max-w-md">
          Our training equips you with the skills and confidence required to succeed in these exams.
          </p>
        </div>

        <div className="space-y-4">
          {exams.map((exam, index) => (
            <div
            key={`${exam.name}-${exam.level ?? index}`}
            className="flex justify-between items-center bg-white border p-4 hover:translate-x-2 transition"
          >
            
            {/* LEFT: Exam Name */}
            <div>
              <p className="text-lg text-primaryColor">
                {exam.name} {exam.level ?? ""}
              </p>
            </div>

            {/* RIGHT: Type + Description */}
            <div className="text-right">
              <p className="text-sm text-gray-500">
                {exam.type}
              </p>
              <p className="text-xs text-gray-400">
                {exam.description}
              </p>
            </div>

          </div>
          ))}
        </div>

      </div>
    </section>
  );
}