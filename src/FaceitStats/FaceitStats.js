import React, { useState } from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import FaceitPlayer from "./FaceitPlayer";

//http://api.faceit.myhosting.info:81/?n=PLAYERNAME

const FaceitStats = () => {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    fetch(`http://api.faceit.myhosting.info:81/?n=${keyword})`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <FaceitPlayer />
    </div>
  );
};

export default FaceitStats;
