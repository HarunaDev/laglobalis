import type { JSX } from "react";
import { Link } from "react-router-dom";
import scrollToSection from "../../../../utils/useScrollTo";

export default function Hero() {
  return (
    <section className="min-h-[85%] md:min-h-[80dvh] lg:min-h-[84dvh] mt-24 md:mt-0 flex items-center justify-center text-center pt-20 px-8 md:px-12 lg:px-20 overflow-hidden">
      <div>
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-primaryColor font-light leading-tight">
          Ex Luce ad Vitam
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Transforming the fabric of excellence through the curation of light, knowledge, and refined service.
        </p>

        <div className="mt-10 flex gap-4 justify-center items-center">
          <Link to="/academy" className="bg-primaryColor text-white px-6 py-3 rounded-lg hover:scale-95 transition-all" >
            Explore
          </Link>
          <button className="border border-primaryColor px-6 py-3 rounded-lg hover:scale-95 transition-all text-white" onClick={() => scrollToSection("divisions")}>
            Discover
          </button>
        </div>
      </div>
    </section>
  );
}