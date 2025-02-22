import React from "react";
import MaxWidthContainer from "../components/MaxWidthContainer";
import { FaArrowLeft } from "react-icons/fa";
import HeroImg from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Booking = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <main className="bg-white">
      <section className="bg-theme-green flex justify-center px-6 w-full mb-5">
        <MaxWidthContainer>
          <div className="flex w-full items-start gap-6 py-5 md:py-10 pb-10">
            <div className="bg-theme-yellow p-3 h-fit rounded-full mt-2 cursor-pointer">
              <Link to="/">
                <FaArrowLeft size={23} />
              </Link>
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
              <p className="text-theme-gray lg:text-lg font-Karla">
                Book your table now and indulge in an unforgettable dining
                experience! Secure your reservation today and let us serve you
                delicious flavors in a cozy and welcoming ambiance! 🍽️✨
              </p>
            </div>
            <img
              src={HeroImg}
              alt="Resturant"
              className="hidden md:block w-[42%] rounded-2xl shadow-2xl shadow-theme-yellow/20"
            />
          </div>
        </MaxWidthContainer>
      </section>

      <section className="flex justify-center px-6 mt-8 mb-12 w-full">
        <MaxWidthContainer>
          <div className="flex flex-col gap-5 items-center">
            <h2 className="font-Markazi font-semibold text-4xl lg:text-5xl text-center">
              Reserve Your Table
            </h2>
            <form className="flex flex-col gap-6 w-full max-w-lg font-Karla" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1 ">
                <label
                  htmlFor="date"
                  className="text-theme-green font-semibold"
                >
                  Choose date
                </label>
                <input
                  type="date"
                  id="date"
                  className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg "
                  min={currentDate}
                />
                
              </div>

              <div className="flex flex-col gap-1 relative">
                <label
                  className="text-theme-green font-semibold"
                  htmlFor="time"
                >
                  Choose time
                </label>
                <select
                  id="time"
                  className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl appearance-none hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg "
                >
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
                <div className="absolute inset-y-0 right-3 top-10 pointer-events-none">
                <IoIosArrowDown color="#495e57" size={25}/>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="text-theme-green font-semibold"
                  htmlFor="guests"
                >
                  Number of guests
                </label>
                <input
                  className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow placeholder:font-Karla text-lg"
                  type="number"
                  placeholder="1"
                  min="1"
                  max="8"
                  id="guests"
                />
              </div>

              <div className="flex flex-col gap-1 relative">
                <label
                  className="text-theme-green font-semibold"
                  htmlFor="occasion"
                >
                  Occasion
                </label>
                <select
                  className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg appearance-none"
                  id="occasion"
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
                <div className="absolute inset-y-0 right-3 top-10 pointer-events-none">
                <IoIosArrowDown color="#495e57" size={25}/>
                </div>
              </div>

              <button
                type="submit"
                className="text-lg bg-theme-yellow px-4 py-3 mt-3 rounded-2xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200 active:scale-95 hover:ring-2 ring-theme-green/50 text-theme-green"

              >
                Submit Reservation
              </button>
            </form>
          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
};

export default Booking;
