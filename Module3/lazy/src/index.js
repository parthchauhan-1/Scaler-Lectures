import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import DynamicImport from "./DynamicImport";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <DynamicImport /> */}
    <App />
  </React.StrictMode>
);
