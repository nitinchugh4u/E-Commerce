import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
// import { RandomProvider } from "./Components/RandomContext.jsx";
// import { Nitin } from './Components/nitin.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    {/* <Nitin/> */}
    {/* <RandomProvider> */}
      <App />
    {/* </RandomProvider> */}
    {/* </React.StrictMode>, */}
  </>
);
