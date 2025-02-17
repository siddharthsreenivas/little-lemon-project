import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Bruchetta from "../assets/bruchetta.svg";
import GreekSalad from "../assets/greekSalad.jpg";
import LemonDessert from "../assets/lemonDessert.jpg";

const Specials = () => {
  const cardData = [
    {
      image: GreekSalad,
      title: "Greek Salad",
      price: 12.99,
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      image: Bruchetta,
      title: "Bruchetta",
      price: 5.99,
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: LemonDessert,
      title: "Lemon Dessert",
      price: "5.00",
      desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="bg-white flex justify-center px-6 w-full">
      <MaxWidthContainer>
        <div className="flex flex-col gap-10 pb-16 lg:pt-32 pt-12 md:pt-24 items-center">
          <div className="flex flex-col gap-3 sm:flex-row justify-between items-center w-full">
            <h2 className="font-Markazi text-5xl">This weeks specials!</h2>
            <button className="py-3 px-9 rounded-2xl text-xl font-semibold font-Karla bg-theme-yellow text-theme-green w-fit hover:scale-[102%] transition-all duration-200 hover:shadow-md hover:shadow-theme-green/40 active:scale-[98%]">
              Online Menu
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {cardData.map((item,index)=>(
              <DishCard key={index} {...item} />
            ))}
          </div>

        </div>
      </MaxWidthContainer>
    </section>
  );
};

const DishCard = ({image, title, price, desc}) => {
  return (
    <div className="flex flex-col gap-5 overflow-hidden rounded-ss-2xl max-w-72 rounded-se-2xl bg-theme-gray flex-1 hover:shadow-xl hover:scale-[102%] transition-all duration-300">
      <img src={image} alt="Bruchetta" className="w-full h-48 object-cover" />

      <div className="flex flex-col justify-between px-7 pb-7 gap-3 h-full">
        <div className="flex justify-between font-Markazi text-2xl font-semibold">
          <p>{title}</p>
          <p className="text-theme-orange">$ {price}</p>
        </div>

        <p className="font-Karla text-theme-green">
          {desc}
        </p>

        <div className="font-Karla font-semibold text-base flex items-center gap-4 hover:text-theme-green group cursor-pointer transition-all duration-200">
          <p>Order a delivery</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 32.3 32.3"
            className="w-5 group-hover:fill-theme-green"

          >
            <g>
              <path d="M17.7,27.3c-1.1,0-1.9,0-3,0c0-2-0.1-4,0-5.9c0-1-0.3-1.5-1.2-2c-1.2-0.7-2.5-1.4-3.7-2.1c-1.8-1.1-2.2-3-0.8-4.5 c1.8-2,3.7-3.9,5.8-5.6c1.5-1.3,3.1-0.9,4.5,0.8c1.1,1.3,2.2,2.6,3.2,3.9c0.7,1,1.7,1.4,2.9,1.3c1.2,0,2.3,0,3.6,0c0,1,0,1.9,0,2.8 c-2.2,0-4.4,0.2-6.6-0.1c-0.8-0.1-1.5-1.1-2.2-1.7c-1.9-1.8-1.4-2-3.4-0.1c-0.6,0.5-1.2,1.1-2,1.8c0.5,0.5,0.9,1.1,1.4,1.5 c1,0.9,1.4,1.9,1.4,3.2C17.7,22.9,17.7,25,17.7,27.3z"></path>
              <path d="M0,25.8c0.3-3.6,2.9-6.3,6.5-6.3c3.6,0,6.4,2.8,6.4,6.5c-0.1,3.6-2.9,6.4-6.5,6.3C2.7,32.2,0.2,29.4,0,25.8z M6.4,21.9 c-2.1,0-4,2-4,4.1c0,2.1,2,4,4.1,4c2.1,0,4-2,4-4.1C10.5,23.8,8.5,21.8,6.4,21.9z"></path>
              <path d="M19.5,25.8c0.3-3.6,2.9-6.3,6.5-6.3c3.6,0,6.4,2.8,6.4,6.5c-0.1,3.6-2.9,6.4-6.5,6.3C22.2,32.2,19.7,29.4,19.5,25.8z M25.9,30c2.1,0,4.1-1.9,4.1-4c0-2.1-1.9-4.1-4-4.1c-2.1,0-4.1,1.9-4.1,4C21.9,28,23.8,30,25.9,30z"></path>
              <path d="M24.1,3.2c0,1.6-1.4,3.2-3,3.2c-1.6,0-3.1-1.5-3.1-3.1C17.9,1.6,19.4,0,21.1,0C22.6,0,24.1,1.5,24.1,3.2z"></path>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default Specials;
