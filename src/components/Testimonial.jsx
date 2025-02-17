import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Profile1 from "../assets/profile1.jpg";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import Profile4 from "../assets/profile4.png";

const Testimonial = () => {
  const data = [
    {
      rating: 4,
      image: Profile1,
      name: "Jon Do",
      username: "Johnny_Utah",
      review:
        '"Seriously cannot stop thinking about the Turkish Mac n\'Cheese!!"',
    },
    {
      rating: 5,
      image: Profile2,
      name: "Sara Lopez",
      username: "Sara72",
      review:
        '"We had such a great time celebrating my grandmothers birthday!"',
    },
    {
      rating: 4,
      image: Profile3,
      name: "Angel John",
      username: "_Angle__John",
      review: '"Best Feta Salad in town. Flawless everytime!"',
    },
    {
      rating: 3,
      image: Profile4,
      name: "Mickel San",
      username: "MikeySan07",
      review: '"Such a chilled out atmosphere - love it!"',
    },
  ];

  return (
    <section className="bg-theme-green flex justify-center px-6 w-full">
      <MaxWidthContainer>
        <div className="py-12 flex flex-col gap-16">
          <h2 className="font-Markazi text-5xl text-theme-yellow text-center">
            Testimonial
          </h2>
          <div className="flex  gap-5 justify-center lg:justify-between flex-wrap">
            {data.map((item, index) => (
              <ProfileCard key={index} {...item} />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

const ProfileCard = ({ rating, image, name, username, review }) => {
  const ratedStar = rating;
  const unratedStar = 5 - rating;

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white px-5 py-6 max-w-60 basis-52 flex-1 hover:shadow-lg hover:shadow-theme-yellow/20 hover:scale-[102%] transition-all duration-300">
      <div className="flex gap-1">
        {Array.from({ length: ratedStar }, (_, i) => i + 1).map((_, index) => (
          <IoIosStar key={index} color="#F4CE14" size={25} />
        ))}
        {Array.from({ length: unratedStar }, (_, i) => i + 1).map((_, index) => (
          <IoIosStarOutline key={index} color="#F4CE14" size={25} />
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <img src={image} alt="" className="w-12 rounded-full" />
        <div className="flex flex-col">
          <p className="font-semibold text-theme-black">{name}</p>
          <p className="font-semibold text-zinc-500">{username}</p>
        </div>
      </div>

      <p className="text-zinc-500 leading-5 text-sm">{review}</p>
    </div>
  );
};

export default Testimonial;
