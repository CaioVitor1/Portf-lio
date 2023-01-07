import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import { FrontEnd } from "./FrontEnd.jsx";
import { MainProject } from "./MainProjects.jsx";
import { BackEnd } from "./BackEnd.jsx";
import { GlobalStyled } from "./Global.jsx";
import { ProjectDescription } from "./ProjectDescription.jsx";
export default function App() {

  return (
    <>
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/about" element={<About />} />;
            <Route path="/mainproject" element={<MainProject />} />;
            <Route path="/description/:projectId" element={<ProjectDescription />} />;
          </Routes>
        </BrowserRouter>
     
    </>
  );
}
