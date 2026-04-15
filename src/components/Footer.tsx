import React, { type JSX } from 'react'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#0A1128] py-2'>
        <small className='text-white text-center block'>
          laglobalislumiere | © {currentYear}
        </small>
    </footer>
  )
}

export default Footer