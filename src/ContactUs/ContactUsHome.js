import React from "react";
import "./contactUsHome.css";

const ContactUsHome = () => {
  return (
    <div id="contact">
      <div className="contact-text">
        <h1 className="contactTitle">Na kontakto</h1>

        <a href="tel:049160599">
          <p className="f">049 160 599</p>
        </a>
        <a href="mailto:remixgamingcenter@gmail.com">
          <p className="s">remixgamingcenter@gmail.com</p>
        </a>

        <p className="t">Ne jemi te hapur per pyetje dhe kritika</p>
      </div>
    </div>
  );
};

export default ContactUsHome;
