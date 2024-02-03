import React, { useState } from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import FaceitPlayer from "./FaceitPlayer";
import Search from "./Search";
import Footer from "../Footer/Footer";
import NavbarFaceit from "./NavbarFaceit";

//http://api.faceit.myhosting.info:81/?n=PLAYERNAME
//http://api.faceit.myhosting.info:81/?n=${keyword})

const FaceitStats = () => {
  const [player, setPlayer] = useState({});

  // useEffect(() => {
  //   fetch("http://api.faceit.myhosting.info:81/?n=nexito")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setPlayer(data);
  //       console.log(player);
  //     });
  // }, []);

  return (
    <>
      <NavbarFaceit />
      <div className="faceitStats">
        <Search keyword={keyword} />
        <FaceitPlayer player={player} keyword={keyword} />
      </div>
      <Footer />
    </>
  );
};

export default FaceitStats;
