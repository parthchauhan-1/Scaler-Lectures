import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import store from "./reduxStore/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
