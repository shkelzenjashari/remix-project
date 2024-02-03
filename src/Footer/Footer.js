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
        <p>
          2000 - 2024 <br /> Remix Gaming Center <br /> Te gjitha te drejtat e
          rezervuara ©
        </p>
      </div>
      <div className="third">
        <div className="footer-social">
          <a
            href="https://www.facebook.com/remixgamingcenter"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} className="footer-image" alt="facebook-logo" />
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/remixgamingcenter"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              className="footer-image"
              alt="instagram-logo"
            />
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.tiktok.com/@remixgamingcenter"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} className="footer-image" alt="tiktok-logo" />
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.discord.gg/CUdZBJKABm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} className="footer-image" alt="discord-logo" />
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.twitch.tv/remixgamingcenter"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitch} className="footer-image" alt="twitch-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
