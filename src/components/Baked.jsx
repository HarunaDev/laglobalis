import React from 'react'

import AnimatedTitle from './AnimatedTitle';

const Baked = () => {
  const bakedItems = [
    {
      id: 1,
      borderColor: "#E99B63",
      name: "Meat Pie",
      image: "/img/pie.png", // Replace with your image path
      description: "Buttery, meaty perfection"
    },
    {
      id: 2,
      borderColor: '#FFB6B6',
      name: "Macarons",
      image: "/img/doughnut.png", // Replace with your image path
      description: "Colorful and delicate"
    },
    {
      id: 3,
      borderColor: "#F2F2F2",
      name: "Éclairs",
      image: "/img/cupcake.png", // Replace with your image path
      description: "Cream-filled delights"
    }
  ];

  return (
    <section className='bg-customOrange-200 py-16'>
        {/* <h1 className='text-[#1c1c1c] text-3xl mb-12 text-center'>Our Baked Creations</h1> */}

        <AnimatedTitle
            title="<h2>Our Baked Creations</h2>"
            containerClass="mb-16 pointer-events-none mix-blend-difference relative z-10"
          />
        
        {/* Container with 3 rounded divs */}
        <div className='max-w-6xl mx-auto px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {bakedItems.map((item) => (
              <div key={item.id} className='flex flex-col items-center'>
                {/* Rounded div with image */}
                <div className={`w-56 h-56 rounded-full  overflow-hidden border-4 border-white shadow-lg mb-4`} style={ {backgroundColor: item.borderColor}}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
                  />
                </div>
                
                {/* Item name and description */}
                <h3 className='text-xl font-semibold text-[#1c1c1c] text-center mb-2'>
                  {item.name}
                </h3>
                <p className='text-gray-700 text-center'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Baked