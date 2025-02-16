import React from "react";
import FooterLogo from '../assets/FooterLogoWhite.svg'
import MaxWidthContainer from "./MaxWidthContainer";

const Footer = () => {
  return (
    <footer className="bg-theme-green text-theme-gray font-Karla px-6 py-12 w-full flex justify-center">

      <MaxWidthContainer>

     <div className="flex flex-col sm:flex-row items-start justify-between gap-6 text-xl"> 

      <img src={FooterLogo} alt="Little Lemon Logo" className="w-24 md:w-32 cursor-pointer" />

      <div>
        <p className="text-theme-yellow font-semibold">Get to know us</p>
        <ul>
          {[
            "Home",
            "About",
            "Menu",
            "Reservation",
            "Order Online",
          ].map((item, index) => (
            <li key={index}>
              <a href="#home" className="hover:text-theme-yellow hover:underline underline-offset-4">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-theme-yellow font-semibold">Reach out to us</p>
        <ul>
          {[
            "Adress",
            "Phone number",
            "Email"
          ].map((item, index) => (
            <li key={index}>
              <a href="#home" className="hover:text-theme-yellow hover:underline underline-offset-4">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-theme-yellow font-semibold">Connect with us</p>
        <ul>
          {[
            "Facebook",
            "Instagram",
            "LinkedIn"
          ].map((item, index) => (
            <li key={index}>
              <a href="#home" className="hover:text-theme-yellow hover:underline underline-offset-4">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      </div>

      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
