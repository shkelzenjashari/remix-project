import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/remixLOGO.png";
import hamburgerMenu from "../images/hamburgerMenu.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={`navbar ${menuOpened ? "opened" : ""}`}>
      <img className="logo" src={logo} alt="Remix-Gaming-Center-Logo" />

      <nav>
        <ul id="myMenu" className={`list ${menuOpened ? "opened" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="/faceit">Faceit Level</Link>
          </li>
        </ul>
      </nav>
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
