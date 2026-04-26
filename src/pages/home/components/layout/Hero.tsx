import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import scrollToSection from "../../../../utils/useScrollTo";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="min-h-[85%] md:min-h-[80dvh] lg:min-h-screen mt-24 md:mt-0 flex items-center justify-center text-center pt-20 px-8 md:px-12 lg:px-20 overflow-hidden">
      <div>
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-primaryColor italic">
          Ex Luce ad Vitam
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-400">
          Transforming the fabric of excellence through the curation of light, knowledge, and refined service.
        </p>

        <div className="mt-10 flex gap-4 justify-center items-center">
          <button className="bg-primaryColor lg:w-full sm:w-auto text-secondaryColor px-6 py-3 rounded-lg hover:scale-95 transition-all" onClick={() => navigate("/about")}>
            Explore
          </button>
          <button className="border border-[#D4AF37] px-6 py-3 lg:w-full sm:w-auto rounded-lg text-[#D4AF37] hover:scale-95 transition-all" onClick={() => scrollToSection("divisions")}>
            Discover
          </button>
        </div>
      </div>
    </section>
  );
}