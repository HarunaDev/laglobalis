import type { JSX } from "react";
import { Link } from "react-router-dom";

type ProgramItem = {
  label: string;
  href: string;
  isComingSoon?: boolean;
};

type Program = {
  title: string;
  items: ProgramItem[];
};

const programs: Program[] = [
  {
    title: "Language School",
    items: [
      {
        label: "French",
        href: "/academy/languages/french",
        isComingSoon: false,
      },
      {
        label: "Spanish",
        href: "/academy/languages/spanish",
        isComingSoon: true,
      },
      {
        label: "Chinese",
        href: "/academy/languages/chinese",
        isComingSoon: true,
      },
      { label: "Dutch", href: "/academy/languages/dutch", isComingSoon: true },
      {
        label: "Portuguese",
        href: "/academy/languages/portuguese",
        isComingSoon: true,
      },
      {
        label: "Italian",
        href: "/academy/languages/italian",
        isComingSoon: true,
      },
    ],
  },
  {
    title: "Exam Preparation",
    items: [
      { label: "WAEC", href: "/academy/exams", isComingSoon: false },
      { label: "JAMB", href: "/academy/exams", isComingSoon: false },
      { label: "IGCSE", href: "/academy/exams", isComingSoon: false },
      { label: "NECO", href: "/academy/exams", isComingSoon: false },
      { label: "GCE", href: "/academy/exams", isComingSoon: false },
      { label: "IGCSE", href: "/academy/exams", isComingSoon: false },
      { label: "JUPEB", href: "/academy/exams", isComingSoon: false },
    ],
  },
  {
    title: "Science & Technology",
    items: [
      {
        label: "Digital Skills",
        href: "/academy/tech/digital-skills",
        isComingSoon: true,
      },
      { label: "AI Basics", href: "/academy/tech/ai", isComingSoon: true },
    ],
  },
  {
    title: "Creative & Arts",
    items: [
      { label: "Theatre", href: "/academy/arts", isComingSoon: true },
      { label: "Music", href: "/academy/arts", isComingSoon: true },
      { label: "Fashion", href: "/academy/arts", isComingSoon: true },
      { label: "Dance", href: "/academy/arts", isComingSoon: true },
    ],
  },
  {
    title: "Adult Education & Entrepreneurship School",
    items: [
      { label: "Basic Level", href: "/academy/education", isComingSoon: true },
      {
        label: "Secondary Level",
        href: "/academy/education",
        isComingSoon: true,
      },
      {
        label: "Skill Acquisition",
        href: "/academy/education",
        isComingSoon: true,
      },
      {
        label: "Skill Monetization",
        href: "/academy/education",
        isComingSoon: true,
      },
      {
        label: "Business Education",
        href: "/academy/education",
        isComingSoon: true,
      },
      {
        label: "Business Education",
        href: "/academy/education",
        isComingSoon: true,
      },
    ],
  },
];

export default function Programs(): JSX.Element {
  return (
    <section className="py-16 px-6 md:px-20 " id="programs">
      <h2 className="text-3xl font-bold text-center text-creamColor">
        Our Programs
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.title}
            className="p-6 rounded-xl border hover:shadow-md transition"
          >
            <h3 className="font-semibold text-primaryColor">{program.title}</h3>

            {/* 🔥 Pills container */}
            <div className="mt-4 flex flex-wrap gap-2">
              {program.items.map((item) =>
                item.isComingSoon ? (
                  <span
                    key={item.label}
                    className="
          text-sm text-gray-400
          px-3 py-1 rounded-lg
          bg-gray-100 border border-gray-200
          cursor-not-allowed
        "
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="
          text-sm text-gray-700
          px-3 py-1 rounded-lg
          bg-green-500 border border-green-200
          hover:bg-primaryColor hover:text-white
          transition
        "
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-10 grid md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="p-6 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="font-semibold text-primaryColor">
                {program.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div> */}
    </section>
  );
}
