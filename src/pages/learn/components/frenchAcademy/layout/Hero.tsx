import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
<section className="min-h-[85%] md:min-h-[80dvh] lg:min-h-[80dvh] md:mt-0 flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-20 overflow-hidden py-12 sm:py-14 md:py-20 lg:py-0">
    
<p className="text-xs tracking-[0.4em] text-primaryColor uppercase">
        Globalis Lumière Premier
      </p>

      <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
        La <span className="italic text-[#D4AF5A]">Lumière</span>
        <br />
        French Academy
      </h1>

      <p className="italic text-gray-300 mt-4">
        Where Language Becomes Light
      </p>

      <p className="italic text-[#B8973A] mt-6 tracking-widest text-sm">
        Ex Luce ad Vitam per Linguam
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-primaryColor text-white px-6 py-3 rounded-lg hover:scale-95 transition-all">
          Enroll Now
        </button>

        <button className="border border-primaryColor px-6 py-3 rounded-lg hover:scale-95 transition-all text-white">
          View Programmes
        </button>
      </div>

</section>
  );
}