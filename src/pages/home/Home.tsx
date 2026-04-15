import React, { type JSX } from 'react'
import Hero from './components/layout/Hero.js'
import WhoWeAre from './components/layout/WhoWeAre.js'
import Divisions from './components/layout/Division.js'
import Mission from './components/layout/Mission.js'
import CTA from './components/layout/CTA.js'

export default function Home({isHovered}): JSX.Element {
  return (
    <main className="relative">
        <div
          className={`h-0 w-[40rem] absolute top-[10%] right-[-1%] -rotate-[30deg] -z-10 ${
            isHovered
              ? "shadow-[0_0_900px_30px_#9B63E9]"
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
        <div className="relative z-2 px-20">
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