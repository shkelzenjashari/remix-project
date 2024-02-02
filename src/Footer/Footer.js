import React from "react";
import "./footer.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import discord from "../images/discord.svg";
import twitch from "../images/twitch.svg";
import logo from "../images/remixLOGO.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <a href="/">
          <img className="logo" src={logo} alt="Remix-Gaming-Center-Logo" />
        </a>
      </div>
      <div className="second">
        <p>Follow us on socials:</p>
        <div className="footer-social">
          <a href="https://www.facebook.com/remixgamingcenter" target="_blank">
            <img src={facebook} alt="facebook-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
