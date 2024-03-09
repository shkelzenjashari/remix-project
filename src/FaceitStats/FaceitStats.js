import React, { useState } from "react";
import Footer from "../Footer/Footer";
import FaceitPlayer from "./FaceitPlayer";
import Loading from "./Loading";
import NavbarFaceit from "./NavbarFaceit";
import "./faceitStats.css";

const FaceitStats = () => {
  const [keyword, setKeyword] = useState("");
  const [player, setPlayer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [res, setRes] = useState(null);

  const fetchApiData = () => {
    const apiKey = "82954729-1074-4a8d-b50e-460c0e719288";
    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    fetch(
      `https://open.faceit.com/data/v4/players?nickname=${keyword}&game=CS2`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((res) => {
        setRes(res);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setPlayer(data);
        setIsLoading(false);
        setKeyword("");
      })
      .catch((error) => {
        setIsLoading(true);
        setError(error);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <NavbarFaceit />
      <div className="faceitStats">
        <div className="search">
          <div className="hero-component">
            <h1 className="levelTitle">Faceit Level</h1>
            <h1>Sheno nickname</h1>
            <input
              type="text"
              value={keyword}
              onChange={(evt) => setKeyword(evt.target.value)}
            />
            {<button onClick={() => fetchApiData()}>Kerko</button>}
          </div>
        </div>
        {isLoading ? (
          <Loading res={res} />
        ) : (
          <FaceitPlayer player={player} error={error} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default FaceitStats;
