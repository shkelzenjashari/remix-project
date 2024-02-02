import React from "react";
import "./aboutUs.css";
import logo from "../images/remixLOGO.png";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="first-part">
        <img src={logo} alt="logo" />
      </div>
      <div className="second-part">
        <h1>Rreth nesh</h1>
        <p className="firstP">
          Me pervoje 24 vjecare ne industri, ne gjithmone vendosim klientet tane
          te paret. Perfomanca me e larte, pastertia dhe mikpritja jane disa nga
          gjerat qe na karakterizojne.
        </p>
        <p className="secondP">
          Ne e kemi ambientin ku te gjithe ndihen rehat si ne shtepi!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
