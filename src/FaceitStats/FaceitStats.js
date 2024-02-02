import React, { useState } from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import FaceitPlayer from "./FaceitPlayer";
import Search from "./Search";
import Footer from "../Footer/Footer";

//http://api.faceit.myhosting.info:81/?n=PLAYERNAME
//http://api.faceit.myhosting.info:81/?n=${keyword})

const FaceitStats = () => {
  const [keyword, setKeyword] = useState("");
  const [player, setPlayer] = useState({});
  useEffect(() => {
    fetch("http://api.faceit.myhosting.info:81/?n=nexito")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // setPlayer(data);
        // console.log(player);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Search keyword={keyword} />
      <FaceitPlayer />
      <Footer />
    </div>
  );
};

export default FaceitStats;
