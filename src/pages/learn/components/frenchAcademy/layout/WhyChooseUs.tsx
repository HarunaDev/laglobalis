import type { JSX } from "react";

const reasons = [
  "Hybrid learning (online + physical)",
  "Exam-focused training",
  "Personalized teaching approach",
  "Supportive environment",
];

export default function WhyUs(): JSX.Element {
  return (
    <section className="py-20 px-6 bg-[#FDF9F3]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-light">
          Why Choose <span className="italic text-[#B8973A]">Us</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="bg-[#F9F5EE] border p-6 hover:shadow-md transition"
            >
              {reason}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}