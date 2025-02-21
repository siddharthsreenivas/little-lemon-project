import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import heroImg from '../assets/heroImg.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section className="bg-theme-green flex justify-center px-6 w-full">  
        <MaxWidthContainer>
          <div className="flex flex-col md:flex-row  gap-6 py-10 items-center relative">
            <div className="flex flex-col justify-center items-center md:items-start gap-4">
                <div className="-space-y-3">
                  <h1 className="text-theme-yellow font-Markazi text-6xl font-medium">Little Lemon</h1>
                  <h2 className="text-theme-gray font-Markazi text-4xl font-medium text-center md:text-start">Chicago</h2>
                </div>

                <p className="text-theme-gray text-center md:text-start font-Karla leading-5 max-w-lg md:max-w-sm font-medium text-lg mb-4">We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist.</p>

                <Link to='/table-booking'>
                <button className="py-3 px-9 rounded-2xl text-xl font-semibold font-Karla bg-theme-yellow text-theme-green w-fit hover:scale-[102%] transition-all duration-200 hover:shadow-md hover:shadow-theme-gray/20 active:scale-[98%]">Reserve a Table</button>
                </Link>
            </div>

            <div className="w-[75%] sm:w-[50%] md:w-[35%] overflow-hidden rounded-2xl md:absolute md:right-0 top-7">
                <img src={heroImg} alt="Resturant" className="w-full " />
            </div>
          </div>
        </MaxWidthContainer>
      </section>
  );
};

export default Hero;
