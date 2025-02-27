import React, { useReducer } from "react";
import MaxWidthContainer from "../components/MaxWidthContainer";
import { FaArrowLeft } from "react-icons/fa";
import HeroImg from "../assets/restaurant.jpg";
import { Link, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import {fetchAPI, submitAPI} from '../util/api'

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const date = action.payload;
      const availTimes = fetchAPI(new Date(date));
      return availTimes
      
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today)
}

const BookingPage = () => {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();
  
  const submitForm = (data) => {
    if (submitAPI(data)) {
      console.log('Form submitted successfully')
      navigate('/confirmed')
    }
    else {
      alert('Form submission failed')
    }
  }

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
                <h1 data-testid='heading' className="text-theme-yellow font-Markazi text-6xl font-medium">
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

            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />

          </div>
        </MaxWidthContainer>
      </section>
    </main>
  );
};

export default BookingPage;
