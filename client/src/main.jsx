import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DarkModeWrapper from "./components/Wrappers/DarkModeWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeWrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        // hideProgressBar
      />
      <App />
    </DarkModeWrapper>
  </React.StrictMode>
);
