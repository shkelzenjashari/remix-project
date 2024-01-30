import React from "react";
import "./navbar.css";
import logo from "../images/remixLOGO.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Remix-Gaming-Center-Logo" />
      <div className="list">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
