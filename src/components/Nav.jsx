import React, { useState } from "react";
import hamburger from "../assets/hamburgerIcon.svg";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex">
      <ul className="md:flex gap-5 hidden">
        {["Home", "About", "Menu", "Reservation", "Order Online", "Login"].map(
          (item, index) => (
            <li key={index}>
              <a
                href="#home"
                className="text-theme-black font-Karla font-medium text-lg hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <img
            src={hamburger}
            alt="Hamburger logo"
            className="w-8 cursor-pointer"
          />
        ) : (
          <IoMdClose className="cursor-pointer" size={32} />
        )}
      </div>

      <div className={`bg-white absolute top-16 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[102vw] opacity-0'} transition-all duration-500 inset-x-0 py-6 h-screen px-8 md:hidden`}>
        <ul className="space-y-4 text-xl">
          {[
            "Home",
            "About",
            "Menu",
            "Reservation",
            "Order Online",
            "Login",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#home"
                className="text-theme-black font-Karla font-medium hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Nav;
