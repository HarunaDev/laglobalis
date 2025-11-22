import React from 'react'

const Cake = () => {
  return (
    <section className='pt-0 lg:pt-20 bg-customGreen-100 min-h-screen flex items-center' id='Shop'>
      <div className='max-w-7xl mx-auto px-8 w-full py-0'>
        <div className='flex flex-col lg:flex-row items-center'>
          
          {/* Left side - Text content */}
          <div className='lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12'>
            <h1 className='text-3xl md:text-3xl lg:text-6xl font-semibold text-[#3F3D56] mb-6 leading-tight'>
              Life is sweet
              <br />
              have another <br /> slice
            </h1>
            <button className='bg-[#FFB6B6] text-[#3F3D56] py-4 px-10 rounded-full text-lg hover:bg-customPurple-300 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg' onClick={() => window.open('mailto:lalumiereglobal@gmail.com')}>
              Treat Yourself Today
            </button>
          </div>

          {/* Right side - Image container */}
          <div className='lg:w-1/2 w-full relative'>
            <div className='relative bg-customPurple-200 h-96 lg:h-screen w-full overflow-hidden rounded-tl-[50%] rounded-tr-[50%] rounded-bl-none rounded-br-none flex items-center justify-center'>
              {/* <img 
                src="/img/cake.png" // Replace with your cake image
                alt="Delicious cake slice"
                className='w-[80%] h-[80%] text-center object-cover'
              /> */}

<img 
    src="/img/cake.png"
    alt="Delicious cake slice"
    className='w-48 sm:w-64 md:w-80 lg:w-[400px] text-center object-cover animate-float'
  />
              
              {/* Optional overlay for better text contrast */}
              <div className='absolute inset-0 bg-customPurple-200 bg-opacity-10'></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cake