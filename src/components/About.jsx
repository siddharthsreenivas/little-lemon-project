import React from 'react'
import MaxWidthContainer from "./MaxWidthContainer";
import Image1 from '../assets/restaurantChef.jpg'
import Image2 from '../assets/restaurant.jpg'

const About = () => {
  return (
    <section id='about' className='bg-white flex justify-center px-6 w-full py-20'>
      <MaxWidthContainer>
        <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 w-full '>

          <div className='md:w-1/2 w-full flex flex-col gap-2 md:gap-8'>
            <div className='flex flex-col font-Markazi font-medium text-theme-green text-center md:text-left'>
              <h2 data-testid='heading' className='text-6xl leading-8'>Little Lemon</h2>
              <h3 className='text-4xl'>Chicago</h3>
            </div>

            <p className='font-Karla font-semibold text-theme-black/90 text-center md:text-left'>
            Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.<br/> We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist.
            </p>
          </div>

          <div className='md:w-1/2 w-full h-[37vh] relative'>
            <img src={Image1} alt="" className='absolute top-0 w-[70%] z-10 h-auto  right-0 shadow-2xl rounded-2xl'/>
            <img src={Image2} alt="" className='absolute bottom-24 lg:bottom-0 w-[70%] h-auto shadow-2xl  rounded-2xl'/>
          </div>

        </div>
      </MaxWidthContainer>
    </section>
  )
}

export default About