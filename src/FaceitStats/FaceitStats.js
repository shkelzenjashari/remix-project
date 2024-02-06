import React, { useState } from "react";
import "./faceitStats.css";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import FaceitPlayer from "./FaceitPlayer";
import Footer from "../Footer/Footer";
import NavbarFaceit from "./NavbarFaceit";

//https://open.faceit.com/data/v4/players?nickname=nexito&game=CS2
//`https://open.faceit.com/data/v4/players?nickname=${keyword}&game=CS2`

const FaceitStats = () => {
  const [keyword, setKeyword] = useState("");
  const [player, setPlayer] = useState("");
  const [error, setError] = useState("");

  let apiKey = "82954729-1074-4a8d-b50e-460c0e719288";

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
        if (res.status === 400) {
        }
        if (!res.ok) {
          throw new Error("Network response was not ok");
          setError("Network response error");
        }
        return res.json();
      })
      .then((data) => {
        setPlayer(data);
        console.log("player", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
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
            {<button onClick={() => fetchApiData()}>Kerko</button>}
          </div>
        </div>
        <FaceitPlayer player={player} keyword={keyword} error={error} />
      </div>
      <Footer />
    </>
  );
};

export default FaceitStats;

// import React, { useState, useEffect } from "react";

// const YourComponent = () => {
//   const [playerData, setPlayerData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch();
//         "https://api.faceit.com/core/v1/nicknames"
//         const data = await response.json();
//         setPlayerData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means it will run only once on component mount

//   return (
//     <div>
//       {playerData ? (
//         // Render your data here
//         <pre>{JSON.stringify(playerData, null, 2)}</pre>
//       ) : (
//         // Loading state or error handling
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default YourComponent
