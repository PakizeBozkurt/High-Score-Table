import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ scores }) => {
  const mainArray = scores;
  // console.log("mainArray: ", mainArray);

  mainArray.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="container">
      <h1>High Scores</h1>

      {scores.map((score, i) => (
        <div key={i + 1} className="main-box">
          <label key={i}>High Scores: {score.name}</label>
          <PlayerScore score={score} />
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
