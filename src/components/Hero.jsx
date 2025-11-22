import React from "react";

const Hero = () => {
  return (
    <section
      className="hero h-[100dvh] flex items-center justify-end text-white"
      style={{
        backgroundImage: "url('/img/laglobalisbg (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay container aligned to right */}
      <div className="relative w-full md:w-2/3 lg:w-1/2 px-8 md:px-16 flex justify-end ">
        <div
          className="animate-rotate-back-forth absolute inset-0 bg-gray-400/50 rounded-3xl origin-center"
          style={{
            clipPath: "polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)",
            backdropFilter: "blur(6px)",
          }}
        ></div>

        <div className="relative px-8 py-10 mt-5">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            <span className="text-customGreen-200">Parlez Français</span> <br />{" "}
            <span className="text-blue-600">Savourez </span> <span className="text-customGreen-200">la</span>{" "}
            <span className="text-red-600">Douceur</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md ml-auto text-[#77777] mb-6">
            Master the language of love while indulging in authentic French
            delicacies. Your journey to fluency starts here.
          </p>
          <button className=" bg-customPurple-300 text-white py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-customOrange-300 hover:text-white cursor-pointer z-50" onClick={() => window.open('mailto:lalumiereglobal@gmail.com')}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
