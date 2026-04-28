import React, { useState, useEffect } from 'react'
import 'boxicons/css/boxicons.min.css'
import logo from "../assets/LaGlobalisLogo-gray.png"
import { NavLink } from 'react-router-dom';

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

  const navClass = ({ isActive }: { isActive: boolean }): string =>
    `text-base tracking-wider transition-colors ${
      isActive
        ? "text-primaryColor"
        : "text-gray-700 hover:text-primaryColor/40"
    }`;

  return (
    <header className={`flex fixed w-[100dvw] h-24 z-50 justify-between items-center py-4 px-4 lg:px-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-secondaryColor bg-opacity-70 backdrop-blur-md shadow-lg' 
        : 'bg-secondaryColor'
    }`}>
      <img className='w-20 h-20' src={logo} alt="La Lumiere Globalise" />
      {/* <h1 className='text-[#D4AF37]'>La GlobalisLumiere</h1> */}

      <nav className="hidden md:flex items-center gap-12">
      
      <NavLink to="/" end className={navClass}>
        Home
      </NavLink>

      <NavLink to="/academy" className={navClass}>
        Academy
      </NavLink>

      <NavLink to="/shop" className={navClass}>
        Shop
      </NavLink>

    </nav>

      <button 
        className='hidden md:block bg-primaryColor text-secondaryColor py-3 px-8 rounded-lg border border-primaryColor transition-all duration-500 hover:scale-95 hover:text-primaryColor hover:bg-secondaryColor hover:border-primaryColor cursor-pointer z-50'
        onMouseEnter={() => onContactHover(true)}
        onMouseLeave={() => onContactHover(false)}
        onClick={() => window.open('mailto:contact@laglobalislumiere.com')}
      >
        Contact
      </button>

      <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
        <i className='bx bx-menu'></i>
      </button>

      <div id='mobileMenu' className='hidden fixed  top-0 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-secondaryColor bg-opacity-80 backdrop-blur-md h-screen'>
        <nav className='flex flex-col gap-6 items-center mt-12'>
        <NavLink to="/" className='text-base tracking-wider transition-colors hover:text-gray-300'>Home</NavLink>
        <NavLink to="/academy" className='text-base tracking-wider transition-colors hover:text-gray-300'>Academy</NavLink>
        <NavLink to="#" className='text-base tracking-wider transition-colors hover:text-gray-300'>Shop</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header