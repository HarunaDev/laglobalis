import React, { useState, useEffect } from 'react'
import 'boxicons/css/boxicons.min.css'

type HeaderProps = {
  onContactHover: (state: boolean) => void;
};

const Header = ({ onContactHover }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
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
        ? 'bg-[#0A1128] bg-opacity-70 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <img className='w-20 h-20' src="src/assets/LaGlobalisLogo-gray.png" alt="La Lumiere Globalise" />
      {/* <h1 className='text-[#D4AF37]'>La GlobalisLumiere</h1> */}

      <nav className='hidden md:flex items-center gap-12'>
        <a href="#About" className='text-base tracking-wider transition-colors hover:text-gray-300'>About</a>
        <a href="#Learn" className='text-base tracking-wider transition-colors hover:text-gray-300'>Learn</a>
        <a href="#Shop" className='text-base tracking-wider transition-colors hover:text-gray-300'>Shop</a>
      </nav>

      <button 
        className='hidden md:block bg-[#D4AF37] text-secondaryColor py-3 px-8 rounded-lg border-none font-medium transition-all duration-500 hover:scale-95 hover:text-secondaryColor cursor-pointer z-50'
        onMouseEnter={() => onContactHover(true)}
        onMouseLeave={() => onContactHover(false)}
        onClick={() => window.open('mailto:contact@laglobalislumiere.com')}
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