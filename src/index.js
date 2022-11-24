import React from "react";
import ReactDOM from "react-dom";
import scores from "./Score";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App scores={scores} />
  </React.StrictMode>,
  rootElement
);
