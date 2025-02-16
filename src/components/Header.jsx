import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-center py-5 px-6 relative z-50">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <img src="./Logo.png" alt="Little Lemon Logo" className="w-40 h-auto" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
