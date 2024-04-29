import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import App from "./App";
import SubmitCertificate from "./components/Pages/SubmitCertificate";
import Display from "./components/Pages/Display";
import DarkModeWrapper from "./components/DarkModeWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="home" element={<App />} />
          <Route path="/categories/:id" element={<SubmitCertificate />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </DarkModeWrapper>
  </React.StrictMode>
);
