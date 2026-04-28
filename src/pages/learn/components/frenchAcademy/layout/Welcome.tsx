import type { JSX } from "react";

const features: string[] = [
  "Personalized one-on-one and group classes",
  "Flexible scheduling (online & in-person)",
  "Beginner to advanced structured learning",
  "Practical conversational French",
  "Academic & professional development",
];

export default function Welcome(): JSX.Element {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#FDF9F3]">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        <div>
          <p className="text-xs tracking-[0.4em] text-primaryColor uppercase">
            Welcome
          </p>

          <h2 className="text-3xl md:text-5xl font-light mt-4 text-secondaryColor">
            Tailored French <br />
            <span className="italic text-[#B8973A]">for every learner</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We offer personalized French tutorials tailored to your pace,
            schedule, and goals — helping you gain real-world confidence in
            reading, writing, listening, and speaking.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-[#F9F5EE] border-l-2 border-[#F0E4C0] p-4 text-secondaryMid"
            >
              {feature}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}