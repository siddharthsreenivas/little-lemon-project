import React, { useEffect } from 'react'
import MaxWidthContainer from "./MaxWidthContainer";
import { FaCheckCircle } from "react-icons/fa";
import HomeIcon from '../assets/home icon.svg'
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {

  useEffect(() => {
    window.scrollTo(0,0) 
  }, [])
  

  return (
    <section id='about' className='flex justify-center px-6 w-full py-20 sm:min-h-[57.9vh]'>
      <MaxWidthContainer>
        <div className='flex items-center justify-center h-full'>

          <div className='flex flex-col items-center'>
            <FaCheckCircle size={'25%'} className='fill-theme-yellow stroke-theme-green stroke-[10px]' />
            <h3 className='font-Markazi text-4xl font-semibold mt-12 text-theme-green'>Your table has been reserved!</h3>
            <p className='font-Karla text-xl text-center md:text-2xl text-theme-green'>You'll receive a confirmation email with all the details.</p>
            <Link to='/'>
              <div className='flex items-center bg-theme-yellow gap-3 py-3 px-8 rounded-2xl mt-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 active:scale-95 hover:ring-2 ring-theme-green/50' aria-label="Return to Home">
                <img src={HomeIcon} alt='home icon' className='w-6 h-6' />
                <span className='font-Karla text-lg text-theme-green'>Return to Home</span>
              </div>
            </Link>
          </div>

        </div>
      </MaxWidthContainer>
    </section>
  )
}

export default ConfirmedBooking