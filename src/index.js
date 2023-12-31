import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { ThemeProvider } from "react-bootstrap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    ></ThemeProvider>
    <App />
  </ContextProvider>
);
