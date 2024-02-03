import React, { useState } from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import FaceitPlayer from "./FaceitPlayer";
import Footer from "../Footer/Footer";
import NavbarFaceit from "./NavbarFaceit";

//http://api.faceit.myhosting.info:81/?n=PLAYERNAME

const FaceitStats = () => {
  const [keyword, setKeyword] = useState("");
  const [player, setPlayer] = useState({});

  const fetchApiData = () => {
    useEffect(() => {
      fetch(`http://api.faceit.myhosting.info:81/?n=${keyword}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPlayer(data);
          console.log(player);
        });
    }, []);
  };

  return (
    <>
      <NavbarFaceit />
      <div className="faceitStats">
        <div className="search">
          <div className="hero-component">
            <h1>Sheno nickname</h1>
            <input
              type="text"
              value={keyword}
              onChange={(evt) => setKeyword(evt.target.value)}
            />
            <button onClick={() => fetchApiData()}>Kerko</button>
          </div>
        </div>
        <FaceitPlayer player={player} keyword={keyword} />
      </div>
      <Footer />
    </>
  );
};

export default FaceitStats;
