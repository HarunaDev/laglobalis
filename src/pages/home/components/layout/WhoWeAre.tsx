import logo from "@/assets/LaGlobalisLogo-gray.png";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="py-4 md:py-24 bg-surface-container-low px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={logo}
            alt="La Globalis Logo"
            className="w-full max-w-md mx-auto lg:mx-0 rounded-xl object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
            The Story Behind Our{" "}
            <span className="text-primaryColor italic">Purpose</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            La Globalis Lumière Group is not merely a conglomerate...
          </p>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            We are a multi-sector lifestyle, education, and service brand
            committed to transforming lives through the gentle illumination of
            light — expressed in knowledge, experience, service, and impact.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-400">
            We are builders of life experiences, carriers of light, and
            transformers of potential into reality.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-400">
            Across every division, we curate environments where excellence is
            not just delivered but deeply felt—where every detail, from
            education to experience, is designed to inspire clarity, elevate
            standards, and awaken purpose.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-400">
            Our mission is to bridge aspiration and reality, creating pathways
            where individuals and communities can thrive through intentional
            service, refined innovation, and the timeless power of illuminated
            thinking.
          </p>
        </div>
      </div>
    </section>
  );
}
