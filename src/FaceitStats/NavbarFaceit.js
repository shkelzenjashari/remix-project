import React, { useState } from "react";
import "../Navbar/navbar.css";
import logo from "../images/remixLOGO.png";
import hamburgerMenu from "../images/hamburgerMenu.jpg";
import { Link } from "react-router-dom";

const NavbarFaceit = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={`navbar ${menuOpened ? "opened" : ""}`}>
      <a href="/">
        <img className="logo" src={logo} alt="Remix-Gaming-Center-Logo" />
      </a>
      <nav>
        <ul id="myMenu" className={`list ${menuOpened ? "opened" : ""}`}>
          <li>
            <Link to="/">Home</Link>
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

export default NavbarFaceit;
