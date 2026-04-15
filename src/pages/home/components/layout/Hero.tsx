import type { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-20">
      <div>
        <h1 className="text-6xl md:text-8xl text-[#D4AF37] italic">
          Ex Luce ad Vitam
        </h1>

        <p className="mt-6 text-xl w-[400px] mx-auto text-secondary">
          Transforming the fabric of excellence through the curation of light, knowledge, and refined service.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="bg-primaryColor text-secondaryColor px-6 py-3 rounded-lg">
            Explore
          </button>
          <button className="border border-[#D4AF37] px-6 py-3 rounded-lg text-[#D4AF37]">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
}