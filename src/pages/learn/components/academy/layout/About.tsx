import type { JSX } from "react";
export default function About(): JSX.Element {
    return (
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="mx-auto space-y-10">
  
          <div>
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              A multi-sector learning institution combining education, language,
              skills, and personal development into one unified system.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Our Philosophy</h3>
            <p className="mt-2 italic text-primaryColor">
              Ex Luce ad Vitam — From Light to Life
            </p>
            <p className="mt-2 text-gray-400 max-w-xl">
              True learning is not just knowledge — it is knowledge that becomes
              life through understanding and action.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-gray-400">
                To nurture and equip individuals with the knowledge, skills, and
                mindset required to succeed in life.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-gray-400">
                To become a leading global academy producing disciplined, skilled,
                and globally competitive individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }