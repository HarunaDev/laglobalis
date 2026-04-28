import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-[85%] md:min-h-[80dvh] lg:min-h-[80dvh] md:mt-0 flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-20 overflow-hidden py-12 sm:py-14 md:py-20 lg:py-0">
    
      <h1 className="text-4xl md:text-6xl leading-tight">
        La Globalis Lumière Academy
      </h1>

      <p className="mt-4 italic text-primaryColor">
        Ex Luce ad Vitam per Scientiam
      </p>

      <p className="mt-6 max-w-2xl text-gray-400">
        Raising globally competitive individuals through the gentle illumination
        of knowledge, skill, creativity, and purposeful action.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button className="bg-primaryColor text-white px-6 py-3 rounded-lg">
          Enroll Now
        </button>
        <Link to="/academy#programs" className="border border-primaryColor px-6 py-3 rounded-lg">
          Explore Programs
        </Link>
      </div>
    
    </section>
  );
}