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
        <h1>About us</h1>
        <p className="firstP">
          With 24 years of experience in the industry, we always put our
          customers first. Our team is passionate about building relationships
          with each and every one of you.
        </p>
        <p className="secondP">
          We have an environment where everyone feels home!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
