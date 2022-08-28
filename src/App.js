import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import Home from "./Home.js";
import About from "./About.js";
export default function App() {

  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/about" element={<About />} />;
          </Routes>
        </BrowserRouter>
     
    </>
  );
}
