import React, { useEffect, useState } from "react";
import hamburger from "../assets/hamburgerIcon.svg";
import { IoMdClose } from "react-icons/io";
import { Link as PageLink } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';

export const PageLinkData = [
  {
    title: 'About',
    link: 'about'
  },
  {
    title: 'Menu',
    link: 'menu'
  },
]

export const RouterLinkData = [
  {
    title: 'Reservation',
    link: '/table-booking'
  },
  {
    title: 'Order Online',
    link: '/',
  },
  {
    title: 'Login',
    link: '/'
  }
]

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen])
  
  

  return (
    <nav className="flex">
      <ul className="md:flex gap-5 hidden">
          <li>
            <RouterLink to='/' className="text-theme-green cursor-pointer font-Karla font-medium text-lg hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200">Home</RouterLink>
          </li>
          {PageLinkData.map((item, index) => (
            <li key={index}>
              <PageLink
                to={item.link} smooth={true} duration={500}
                className="text-theme-green cursor-pointer font-Karla font-medium text-lg hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200"
              >
                {item.title}
              </PageLink>
            </li>
          ))}
          {RouterLinkData.map((item,index) => (
            <li key={index}>
              <RouterLink to={item.link} className="text-theme-green cursor-pointer font-Karla font-medium text-lg hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200">{item.title}</RouterLink>
            </li>
          ))}
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

      <div className={`bg-white absolute top-20 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[102vw] opacity-0'} transition-all duration-500 inset-x-0 py-6 h-screen px-8 md:hidden border-t border-theme-green`}>
        <ul className="space-y-4 text-xl">
          <li>
            <RouterLink
              to='/'
              onClick={()=>setIsOpen(!isOpen)}
              className="text-theme-green font-Karla font-medium hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200"
            >
              Home
            </RouterLink>
          </li>
          {PageLinkData.map((item, index) => (
            <li key={index}>
              <PageLink
                to={item.link}
                onClick={()=>setIsOpen(!isOpen)}
                smooth={true} duration={500}
                className="text-theme-green font-Karla font-medium hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200 cursor-pointer"
              >
                {item.title}
              </PageLink>
            </li>
          ))}
          {RouterLinkData.map((item, index) => (
            <li key={index}>
            <RouterLink
              to={item.link}
              onClick={()=>setIsOpen(!isOpen)}
              className="text-theme-green font-Karla font-medium hover:text-theme-yellow/90 hover:underline underline-offset-4 transition-all duration-200"
            >
              {item.title}
            </RouterLink>
          </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Nav;
