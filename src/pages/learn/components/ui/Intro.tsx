import type { JSX } from "react";
export default function Intro(): JSX.Element {
    return (
      <section className="py-16 px-6 md:px-12 text-center bg-creamColor">
        <h2 className="mb-6 text-lg italic text-primaryColor">
        Ex Luce ad Vitam per Scientiam
      </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          We are a hybrid learning academy committed to transforming lives through
          the gentle illumination of knowledge — expressed in education, skills,
          creativity, and global opportunities.
        </p>
  
        <p className="mt-4 text-gray-600">
          From early childhood to adulthood, we provide pathways to learn, grow,
          and thrive in real life.
        </p>
      </section>
    );
  }