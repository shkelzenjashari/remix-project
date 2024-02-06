import React from "react";
import "./faceitPlayer.css";

const FaceitPlayer = ({ player, keyword }) => {
  let lvl1 = 0;
  let lvl2 = 501;
  let lvl3 = 751;
  let lvl4 = 901;
  let lvl5 = 1051;
  let lvl6 = 1201;
  let lvl7 = 1351;
  let lvl8 = 1531;
  let lvl9 = 1751;
  let lvl10 = 2001;

  let playerElo = player ? player.games.cs2.faceit_elo : null;
  let playerLvl;
  let eloToNextLevel;

  switch (true) {
    case playerElo >= 0 && playerElo < 501:
      playerLvl = "Level 1";
      eloToNextLevel = lvl2 - playerElo;
      break;
    case playerElo >= 501 && playerElo < 751:
      playerLvl = "Level 2";
      eloToNextLevel = lvl3 - playerElo;
      break;
    case playerElo >= 751 && playerElo < 901:
      playerLvl = "Level 3";
      eloToNextLevel = lvl4 - playerElo;
      break;
    case playerElo >= 901 && playerElo < 1051:
      playerLvl = "Level 4";
      eloToNextLevel = lvl5 - playerElo;
      break;
    case playerElo >= 1051 && playerElo < 1201:
      playerLvl = "Level 5";
      eloToNextLevel = lvl6 - playerElo;
      break;
    case playerElo >= 1201 && playerElo < 1351:
      playerLvl = "Level 6";
      eloToNextLevel = lvl7 - playerElo;
      break;
    case playerElo >= 1351 && playerElo < 1531:
      playerLvl = "Level 7";
      eloToNextLevel = lvl8 - playerElo;
      break;
    case playerElo >= 1531 && playerElo < 1751:
      playerLvl = "Level 8";
      eloToNextLevel = lvl9 - playerElo;
      break;
    case playerElo >= 1751 && playerElo < 2001:
      playerLvl = "Level 9";
      eloToNextLevel = lvl10 - playerElo;
      break;
    case playerElo >= 2001:
      playerLvl = "Level 10";
      eloToNextLevel = 0;
      break;
    default:
      playerLvl = "Invalid Level";
      eloToNextLevel = 0;
  }

  return (
    <div className="faceitPlayer">
      {player && (
        <>
          <h1>{keyword}</h1>
          <p>Level : {playerLvl}</p>
          <p>Elo : {playerElo}</p>
          {playerLvl !== "Level 10" ? (
            <p>Elo to Next Level: {eloToNextLevel}</p>
          ) : (
            <p>You reached the max level!</p>
          )}
        </>
      )}
    </div>
  );
};

export default FaceitPlayer;
