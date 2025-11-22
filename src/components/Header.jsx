// import React from 'react'
// import 'boxicons/css/boxicons.min.css'

// const Header = () => {
//   const toggleMobileMenu = () => {
//     const mobileMenu = document.getElementById('mobileMenu')

//     if(mobileMenu.classList.contains('hidden')) {
//       mobileMenu.classList.remove('hidden')
//     } else {
//       mobileMenu.classList.add('hidden')
//     }
//   }
//   return (
//     <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
//       <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0 '>
//           La Lumiere Globalise
//       </h1>

//       <nav className='hidden md:flex items-center gap-12'>
//          <a href="text-base tracking-wider transition-colors hover:text-gray-300">Company</a>
//         <a href="text-base tracking-wider transition-colors hover:text-gray-300">Freatures</a>
//         <a href="text-base tracking-wider transition-colors hover:text-gray-300">Resources</a>
//       </nav>

//       {/* when they hover on this i want the text shadow in the other file to change */}
//       <button className='hidden md:block bg-[#e99b63] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-violet-300 cursor-pointer z-50'>Contact</button>

//       <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
//         <i class='bx bx-menu'></i>
//       </button>

//       <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
//         <nav className='flex flex-col gap-6 items-center'>
//         <a href="text-base tracking-wider transition-colors hover:text-gray-300">Company</a>
//         <a href="text-base tracking-wider transition-colors hover:text-gray-300">Freatures</a>
//         <a href="text-base tracking-wider transition-colors hover:text-gray-300">Resources</a>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react'
import 'boxicons/css/boxicons.min.css'

const Header = ({ onContactHover }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')
    mobileMenu.classList.toggle('hidden')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show background when scrolled down past 100px or when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className={`flex fixed w-[100dvw] h-24 z-50 justify-between items-center py-4 px-4 lg:px-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black bg-opacity-70 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <img className='w-52 h-32' src="/img/laglobalislogo.png" alt="La Lumiere Globalise" />

      <nav className='hidden md:flex items-center gap-12'>
        <a href="#About" className='text-base tracking-wider transition-colors hover:text-gray-300'>About</a>
        <a href="#Learn" className='text-base tracking-wider transition-colors hover:text-gray-300'>Learn</a>
        <a href="#Shop" className='text-base tracking-wider transition-colors hover:text-gray-300'>Shop</a>
      </nav>

      <button 
        className='hidden md:block bg-customOrange-300 text-white py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-customPurple-200 hover:text-[#2d2d2d] cursor-pointer z-50'
        onMouseEnter={() => onContactHover(true)}
        onMouseLeave={() => onContactHover(false)}
        onClick={() => window.open('mailto:lalumiereglobal@gmail.com')}
      >
        Contact
      </button>

      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>
        <nav className='flex flex-col gap-6 items-center'>
        <a href="#About" className='text-base tracking-wider transition-colors hover:text-gray-300'>About</a>
        <a href="#Learn" className='text-base tracking-wider transition-colors hover:text-gray-300'>Learn</a>
        <a href="#Shop" className='text-base tracking-wider transition-colors hover:text-gray-300'>Shop</a>
        </nav>
      </div>
    </header>
  )
}

export default Header