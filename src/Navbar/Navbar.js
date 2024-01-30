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
    <div className="navbar">
      <img className="logo" src={logo} alt="Remix-Gaming-Center-Logo" />

      <nav>
        <ul id="myMenu" className={`list ${menuOpened ? "opened" : ""}`}>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About us</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="#faceit">Faceit Level</Link>
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
