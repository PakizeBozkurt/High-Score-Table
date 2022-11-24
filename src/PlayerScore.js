import { useState } from "react";
import React from "react";

const PlayerScore = ({ score, status, handleAsending }) => {
  console.log("score: ", score);

  //create an array for scores data
  const array = score.scores;
  console.log("array: ", array);

  const [sort, setSort] = useState(false);

  // sort the array descending according to score
  // const sortedArrayDes = array.sort(function (a, b) {
  //   return b.s - a.s;
  // });

  return (
    <div className="nameScores">
      <button onClick={() => setSort(!sort)}>Sort</button>
      {sort
        ? array
            .sort((a, b) => b.s - a.s)
            .map((name, i) => (
              <div key={i} className="list">
                <span key={i + 1} className="name">
                  {name.n}
                </span>
                <span key={i + 2} className="score">
                  {name.s}
                </span>
              </div>
            ))
        : array
            .sort((a, b) => a.s - b.s)
            .map((name, i) => (
              <div key={i} className="list">
                <span key={i + 1} className="name">
                  {name.n}
                </span>
                <span key={i + 2} className="score">
                  {name.s}
                </span>
              </div>
            ))}
    </div>
  );
};

export default PlayerScore;
