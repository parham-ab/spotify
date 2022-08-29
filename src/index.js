import React from "react";
import ReactDOM from "react-dom/client";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// styles
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);