import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CalendarProvider } from "./components/context/DateContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CalendarProvider>
    <App />
  </CalendarProvider>
);
