import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { LocalContextProvider } from "./Context/LocalContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalContextProvider>
    <RouterProvider router={router} />
  </LocalContextProvider>
);
