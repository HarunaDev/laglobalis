import React from 'react'
import AnimatedTitle from './AnimatedTitle'

const Intro = () => {
  return (
    <section id='About' className=' bg-[#EAF8F0] flex flex-col gap-4 justify-center items-center py-16'>
        {/* <h1 className='text-[#1c1c1c] text-3xl mb-12 text-center'>Why choose <span className='text-customOrange-300'>LaGlobalisLumiere</span></h1> */}

        <AnimatedTitle
            title="<h2>Why choose LaGlobalisLumiere</h2>"
            containerClass="mb-8 pointer-events-none mix-blend-difference relative z-10"
          />

        <div className='flex flex-col md:flex-row items-center justify-center gap-16  px-8'>
          
          {/* Left container - Circular image */}
          <div className='flex justify-center items-center'>
            <div className='w-72 h-72 rounded-full bg-customGreen-300 border-4 border-customGreen-300 overflow-hidden flex items-center justify-center shadow-lg'>
              <img 
                src="/img/ella.png" 
                alt="Feature" 
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Right container - Text content */}
          <div className='max-w-md text-center md:text-left'>
            <h3 className='text-2xl font-semibold text-[#2d2d2d] mb-4'>
              Immersive Learning Experience
            </h3>
            <p className='text-gray-600 leading-relaxed'>
            Meet Emmanuella Oti - Lagos-based French tutor and artisan baker. Through LaGlobalisLumiere, she provides expert French language training for all ages, combining linguistic excellence with authentic French culinary experiences.
            </p>
          </div>

        </div>
    </section>
  )
}

export default Intro