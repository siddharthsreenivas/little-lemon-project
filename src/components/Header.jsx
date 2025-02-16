import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex justify-between md:justify-center gap-28 lg:gap-44 py-3 px-8 items-center relative z-50'>
        <img src='./Logo.png' alt='Little Lemon Logo' className='w-40 h-auto'/>
        <Nav />
    </header>
  )
}

export default Header