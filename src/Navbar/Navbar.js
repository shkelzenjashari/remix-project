import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/remixLOGO.png";
import hamburgerMenu from "../images/hamburgerMenu.png";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Remix-Gaming-Center-Logo" />
      <div className={`list ${menuOpened ? "active" : ""}`}>
        <ul className={`ul ${menuOpened ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <img
        className="hamburgerMenu"
        onClick={toggleMenu}
        src={hamburgerMenu}
        alt="hamburger-menu"
      />
    </div>
  );
};

export default Navbar;
