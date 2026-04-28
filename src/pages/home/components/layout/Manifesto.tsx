import type { JSX } from "react";

type SectionBlock = {
  title: string;
  content: string;
};

type ManifestoItem = {
  title: string;
  description: string;
};

const manifestoIntro: string =
  "We believe that light is the source of transformation. It is knowledge, creativity, truth, and excellence. Life is the canvas where these are expressed.";

const manifestoCommitment: string =
  "We are committed to bringing light into life in every form — subtle, illuminating, and transformative.";

const manifestoImpact: ReadonlyArray<ManifestoItem> = [
  {
    title: "Education",
    description: "Igniting curiosity and personal growth",
  },
  {
    title: "Food & Hospitality",
    description: "Delighting senses and creating joy",
  },
  {
    title: "Arts & Culture",
    description: "Inspiring creativity and cultural engagement",
  },
  {
    title: "Transport & Logistics",
    description: "Connecting people and communities",
  },
  {
    title: "Cleanliness & Care",
    description: "Providing healthy and safe environments",
  },
];

const mission: SectionBlock = {
  title: "Our Mission",
  content:
    "To illuminate lives by offering quality, creative, and meaningful experiences across multiple sectors, enabling individuals and communities to thrive, learn, celebrate, and live fully.",
};

const vision: SectionBlock = {
  title: "Our Vision",
  content:
    "To be the leading multi-sector brand that transforms ordinary experiences into extraordinary, light-filled, life-enhancing moments — wherever we operate.",
};

export default function AboutSection(): JSX.Element {
  return (
    <section
      aria-labelledby="about-heading"
      className="w-full px-6 md:px-12 lg:px-12 py-16 "
    >
      {/* 🔥 Section Heading (SEO Friendly) */}
      <header className="max-w-5xl mx-auto text-center">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl md:text-4xl leading-tight"
        >
          From{" "}
          <span className="text-primaryColor italic">Purpose</span> to{" "}
          <span className="text-primaryColor italic">Impact</span>
        </h2>

        <p className="mt-4 text-gray-400 text-base md:text-lg">
          Discover the philosophy that shapes our actions, defines our direction,
          and inspires the experiences we create.
        </p>
      </header>

      {/* 🌟 Manifesto (Full Width) */}
      <div className="mt-14 max-w-5xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-primaryColor">
          Our Manifesto
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {manifestoIntro}
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {manifestoCommitment}
        </p>

        {/* Impact Areas */}
        {/* <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {manifestoImpact.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-primaryColor">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* 🎯 Mission + Vision */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[mission, vision].map((block) => (
          <article
            key={block.title}
            className="py-6 rounded-2xl   hover:shadow-md transition"
          >
            {/* border border-primaryColor */}
            <h3 className="text-xl md:text-2xl font-semibold text-primaryColor">
              {block.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {block.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}