// import { useState } from "react";
// import "./App.css";
// import Header from "./components/Header";

// function App() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <main>
//         {/* <img src="/ella.png" alt="gradient" className='absolute top-28 right-32 opacity-60 -z-1 md:mx-auto md-right-0'/> */}

//         {/* <img 
//   src="/ella.png" 
//   alt="gradient" 
//   className='absolute top-28 left-1/2 transform -translate-x-1/2 opacity-90 z-10 md:left-1/2 md:transform md:-translate-x-1/2 lg:left-auto lg:transform-none lg:right-32'
// /> */}

//         {/* <img 
//   src="/laglobalisbg2.png" 
//   alt="gradient" 
//   className='absolute top-28 left-1/2 transform -translate-x-1/2 opacity-60 w-5/6 -z-10 md:left-1/2 md:transform md:-translate-x-1/2 lg:left-auto lg:transform-none lg:right-32'
// /> */}
//         {/* Dynamic shadow based on hover state */}
//         <div
//           className={`h-0 w-[40rem] absolute top-[20%] right-[-8%] -rotate-[30deg] -z-10 ${
//             isHovered
//               ? "shadow-[0_0_900px_30px_#63E99B]"
//               : "shadow-[0_0_900px_30px_#E99B63]"
//           }`}
//         />

//         <Header onContactHover={setIsHovered} />

//         <section
//           className="hero relative min-h-screen flex items-center"
//           style={{
//             backgroundImage: "url('/laglobalisbg (1).png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           {/* Your content here */}
//           <h1>Parlez Francais <br /> Savourez la Doucer</h1>

//           <p>Master the language of love while indulging in authentic French delicacies. Your journey to fluency starts here.</p>
//         </section>
//       </main>
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import HowToLearn from "./components/HowToLearn";
import Baked from "./components/Baked";
import Cake from "./components/Cake";
import Footer from "./components/Footer";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <main className="relative">
        <div
          className={`h-0 w-[40rem] absolute top-[10%] right-[-1%] -rotate-[30deg] -z-10 ${
            isHovered
              ? "shadow-[0_0_900px_30px_#9B63E9]"
              : "shadow-[0_0_900px_30px_#E99B63]"
          }`}
        />

        <Header onContactHover={setIsHovered} />
        

        
        <div className="relative z-10">
        <Hero />
        </div>
        <div className="relative z-20">
        <Intro />
        </div>
        <div className="relative z-20">
        <HowToLearn />
        </div>
        <div className="relative z-20">
        <Baked />
        </div>
        <div className="relative z-20">
        <Cake />
        </div>
        <Footer />
        
        
      </main>
    </>
  );
}

export default App;
