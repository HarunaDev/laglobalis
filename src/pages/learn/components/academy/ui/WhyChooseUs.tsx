import type { JSX } from "react";

const reasons: string[] = [
    "Hybrid learning (physical + online)",
    "Multi-skill development",
    "Global exposure",
    "Strong language foundation",
    "Real-life application of knowledge",
  ];
  
  export default function WhyChooseUs(): JSX.Element {
    return (
      <section className="py-16 px-6 md:px-12 bg-creamColor">
        <h2 className="text-3xl text-center mb-10 text-secondaryColor">Why Choose Us</h2>
  
        <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <p key={reason} className="text-gray-600 text-lg">
            <span className="text-primaryColor">✓</span> {reason}
          </p>
          ))}
        </div>
      </section>
    );
  }