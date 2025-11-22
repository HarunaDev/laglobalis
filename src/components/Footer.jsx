import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#3F3D56] py-2'>
        <small className='text-white text-center block'>
          laglobalislumiere | © {currentYear}
        </small>
    </footer>
  )
}

export default Footer