import React from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";

const FaceitStats = () => {
  useEffect(() => {
    fetch("http://api.faceit.myhosting.info:81/?n=NEMPITO)")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navbar /> {/* change <a> to Link */}
    </div>
  );
};

export default FaceitStats;
