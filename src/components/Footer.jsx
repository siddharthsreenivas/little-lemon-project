import React from "react";

const Footer = () => {
  return (
    <footer className="bg-theme-green text-theme-gray font-Karla">
      <img src="./Logo.svg" alt="Little Lemon Logo" />

      <div>
        <p>Doormat Navigation</p>
        <ul>
          {[
            "Home",
            "About",
            "Menu",
            "Reservation",
            "Order Online",
            "Login",
          ].map((item, index) => (
            <li>
              <a href="#home">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>Contact</p>
        <ul>
          {[
            "Adress",
            "Phone number",
            "Email"
          ].map((item, index) => (
            <li>
              <a href="#home">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>Social Media Links</p>
        <ul>
          {[
            "Adress",
            "Phone number",
            "Email"
          ].map((item, index) => (
            <li>
              <a href="#home">{item}</a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
