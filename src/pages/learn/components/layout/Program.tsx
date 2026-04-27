import type { JSX } from "react";

type Program = {
    title: string;
    description: string;
  };
  
  const programs: Program[] = [
    {
      title: "Language School",
      description: "French, Spanish, Chinese and more with structured learning.",
    },
    {
      title: "Exam Preparation",
      description: "WAEC, NECO, JAMB, IGCSE and more.",
    },
    {
      title: "Science & Technology",
      description: "Digital skills, AI, and tech fundamentals.",
    },
    {
      title: "Arts & Creative",
      description: "Music, theatre, dance, and fashion.",
    },
    {
      title: "Entrepreneurship",
      description: "Learn to turn skills into income.",
    },
  ];
  
  export default function Programs(): JSX.Element {
    return (
      <section className="py-16 px-6 md:px-20 bg-creamColor">
        <h2 className="text-3xl font-bold text-center text-secondaryColor">Our Programs</h2>
  
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="p-6 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-primaryColor">
                {program.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }