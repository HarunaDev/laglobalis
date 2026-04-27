import type { JSX } from "react";
const steps: string[] = [
    "Choose your program",
    "Register online or in person",
    "Get assessed",
    "Start your learning journey",
  ];
  
  export default function HowItWorks(): JSX.Element {
    return (
      <section className="py-16 px-6 md:px-12 text-center bg-creamColor">
        <h2 className="text-3xl font-bold text-secondaryColor">How It Works</h2>
  
        <div className="mt-10 flex flex-col gap-4 max-w-xl mx-auto">
          {steps.map((step, index) => (
            <p key={step} className="text-gray-600">
              {index + 1}. {step}
            </p>
          ))}
        </div>
      </section>
    );
  }