import React from "react";
import MaxWidthContainer from "../components/MaxWidthContainer";
import { FaArrowLeft } from "react-icons/fa";
import HeroImg from '../assets/restaurant.jpg'

const Booking = () => {
  return (
    <main className="bg-white min-h-screen">

      <section className="bg-theme-green flex justify-center px-6 w-full">
        <MaxWidthContainer>
          <div className="flex w-full items-start gap-6 py-5 md:py-10 pb-10">
            <div className="bg-theme-yellow p-3 h-fit rounded-full mt-2">
              <FaArrowLeft size={23} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="-space-y-3">
                <h1 className="text-theme-yellow font-Markazi text-6xl font-medium">
                  Little Lemon
                </h1>
                <h2 className="text-theme-gray font-Markazi text-4xl font-medium">
                  Chicago
                </h2>
              </div>
              <p className="text-theme-gray lg:text-lg">
              Book your table now and indulge in an unforgettable dining experience! Secure your reservation today and let us serve you delicious flavors in a cozy and welcoming ambiance! 🍽️✨
              </p>
            </div>
            <img src={HeroImg} alt="Resturant" className="hidden md:block w-[42%] rounded-2xl shadow-2xl shadow-theme-yellow/20" />
          </div>
        </MaxWidthContainer>
      </section>

    </main>
  );
};

export default Booking;
