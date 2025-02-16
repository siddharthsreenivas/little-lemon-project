import React from 'react'
import MaxWidthContainer from './MaxWidthContainer'
import Bruchetta from '../assets/bruchetta.svg'
import GreekSalad from '../assets/greekSalad.jpg'
import LemonDessert from '../assets/lemonDessert.jpg'

const Specials = () => {
  return (
    <section className="bg-white flex justify-center px-6 w-full">  
        <MaxWidthContainer>
          <div className="flex flex-col gap-10 pb-16 lg:pt-32 pt-12 md:pt-24 items-center">
            
            <div className='flex flex-col gap-3 sm:flex-row justify-between items-center w-full'>
              <h2 className='font-Markazi text-5xl'>This weeks specials!</h2>
              <button className="py-3 px-9 rounded-2xl text-xl font-semibold font-Karla bg-theme-yellow text-theme-green w-fit">Online Menu</button>
            </div>

            <div className='flex flex-col justify-between gap-6 border-2 border-black'>

              <div className='flex '>
                  <img src={Bruchetta} alt="Bruchetta" className='w-56' />
              </div>

              <div>
                <p>Bruchetta</p>
                <p>$ 5.99</p>
              </div>

              <p>
                Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>

              <div>
                <p>Order a delivery</p>
                

              </div>

            </div>
            
          </div>
        </MaxWidthContainer>
      </section>
  )
}

const DishCard = () => {
  return (
    <p>hi</p>
  )
}

export default Specials