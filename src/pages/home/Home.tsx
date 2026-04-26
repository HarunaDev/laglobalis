import React, { type JSX } from 'react'
// import Hero from './components/layout/Hero.js'
import WhoWeAre from './components/layout/WhoWeAre'
import Divisions from './components/layout/Division'
import Mission from './components/layout/Mission'
import CTA from './components/layout/CTA'
import Hero from './components/layout/Hero'
import AboutSection from './components/layout/Manifesto'
// import Hero from './components/layout/Hero.js'

type Props = {
  isHovered: boolean;
}

export default function Home({isHovered} : Props): JSX.Element {
  return (
    <main className="relative">
        <div
          className={`h-0 w-[40rem] absolute lg:top-[10%] top-[3%] right-[2%] -rotate-[30deg] -z-10 ${
            isHovered
              ? "shadow-[0_0_900px_30px_#453059]"
              : "shadow-[0_0_900px_30px_#E99B63]"
          }`}
        />

        
        

        
        <div className="relative z-10">
        <Hero />
        </div>
        <div className="relative z-20">
        <WhoWeAre />
        </div>
        <div className="relative z-20">
        <Divisions />
        </div>
        <div className="relative z-20">
        <AboutSection />
        </div>
        <div className="relative z-2">
        <Mission />
        </div>
        <div className="relative z-20">
        <CTA />
        </div>
        <div className="relative z-20">
        {/* <Cake /> */}
        </div>
        {/* <Footer /> */}
        
        
      </main>
  )
}