import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Bookmarks from "./pages/Bookmarks";
import Curriculum from "./pages/Curriculum";
import Portifolio from "./pages/Portifolio";
import Publications from "./pages/Publications";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
