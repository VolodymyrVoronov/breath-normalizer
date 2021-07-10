import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "./components/App/App";

import "./styles/reset.scss";
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
