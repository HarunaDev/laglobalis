import type { JSX } from "react";
export default function CTA(): JSX.Element {
    return (
      <section className="py-20 text-center text-white px-6">
        <h2 className="text-3xl font-bold">
          Start your journey today
        </h2>
  
        <p className="mt-4 italic">
          Ex Luce ad Vitam — From Light to Life
        </p>
  
        <button className="mt-6 bg-white text-primaryColor px-6 py-3 rounded-lg font-semibold">
          Enroll Now
        </button>
      </section>
    );
  }