import React, { type JSX } from 'react'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondarColor py-2'>
        <small className='text-gray-400 text-center block'>
          laglobalislumiere | © {currentYear}
        </small>
    </footer>
  )
}

export default Footer