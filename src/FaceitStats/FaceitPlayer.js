import React from "react";
import "./faceitPlayer.css";
import level1 from "../images/1.svg";
import level2 from "../images/2.svg";
import level3 from "../images/3.svg";
import level4 from "../images/4.svg";
import level5 from "../images/5.svg";
import level6 from "../images/6.svg";
import level7 from "../images/7.svg";
import level8 from "../images/8.svg";
import level9 from "../images/9.svg";
import level10 from "../images/10.svg";

const levelImages = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
];

const FaceitPlayer = ({ player, error }) => {
  const levels = [
    { minElo: 0, maxElo: 501, name: "Level 1", nextLevelImage: level2 },
    { minElo: 501, maxElo: 751, name: "Level 2", nextLevelImage: level3 },
    { minElo: 751, maxElo: 901, name: "Level 3", nextLevelImage: level4 },
    { minElo: 901, maxElo: 1051, name: "Level 4", nextLevelImage: level5 },
    { minElo: 1051, maxElo: 1201, name: "Level 5", nextLevelImage: level6 },
    { minElo: 1201, maxElo: 1351, name: "Level 6", nextLevelImage: level7 },
    { minElo: 1351, maxElo: 1531, name: "Level 7", nextLevelImage: level8 },
    { minElo: 1531, maxElo: 1751, name: "Level 8", nextLevelImage: level9 },
    { minElo: 1751, maxElo: 2001, name: "Level 9", nextLevelImage: level10 },
    { minElo: 2001, maxElo: Infinity, name: "Level 10", nextLevelImage: null },
  ];

  const findPlayerLevel = (elo) => {
    for (const level of levels) {
      if (elo >= level.minElo && elo < level.maxElo) {
        return level;
      }
    }
    return null;
  };

  const playerLevel = player
    ? findPlayerLevel(player.games.cs2.faceit_elo)
    : null;
  const eloToNextLevel = playerLevel
    ? playerLevel.maxElo - player.games.cs2.faceit_elo
    : null;

  return (
    <div className="faceitPlayer">
      {player && (
        <div className="playerData">
          <div className="playerTitle">
            <img
              className="playerAvatar"
              src={player.avatar}
              alt="Player Avatar"
            />
            <h1>{player.nickname}</h1>
          </div>
          {playerLevel && (
            <>
              <div className="playerElo">
                <p>Level</p>
                <img
                  src={levelImages[levels.indexOf(playerLevel)]}
                  alt={`Level ${levels.indexOf(playerLevel) + 1}`}
                />
              </div>
              <p>Elo: {player.games.cs2.faceit_elo}</p>
              {playerLevel.name !== "Level 10" && (
                <div className="playerElo">
                  <p>Elo to </p>
                  <img
                    src={playerLevel.nextLevelImage}
                    alt={`Level ${levels.indexOf(playerLevel) + 2}`}
                  />
                  <p>: {eloToNextLevel}</p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FaceitPlayer;
