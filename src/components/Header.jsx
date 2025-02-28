import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="home" className="flex justify-center py-5 px-6 relative z-50">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <Link to='/'>
          <img src="./Logo.png" aria-label="Logo" alt="Little Lemon Logo" className="w-40 h-auto" />  
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
