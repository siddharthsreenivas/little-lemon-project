import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        {["Home", "About", "Menu", "Reservation", "Order Online", "Login"].map(
          (item, index) => (
            <li>
              <a href="#home">{item}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
