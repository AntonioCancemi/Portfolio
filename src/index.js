import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
