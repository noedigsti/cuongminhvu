import React from "react";
import ReactDOM from "react-dom";
// Move this to a separate Index.js page as it will the main default homepage
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
