import React from "react";
import "./styles.css";
import HighScoreTable from "./HighScoreTable";

function App({ scores }) {
  // console.log(scores);
  return (
    <div className="App">
      <HighScoreTable scores={scores} />
    </div>
  );
}

export default App;
