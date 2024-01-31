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
        <p>
          With years of experience in the industry, we strive to be the best in
          our field and put our customers first. Our team is passionate about
          building relationships with each and every one of you and creating an
          environment where everyone feels welcome.Thank you for choosing us as
          your go-to provider; we look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
