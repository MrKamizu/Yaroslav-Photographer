import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, ArtGallery, Topics } from "./Pages";

import { HeaderElement, FooterElement } from "./components/layouts/index";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1980px] m-auto">
      <Router>
        <HeaderElement />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<ArtGallery />} />
            <Route path="/topics" element={<Topics />} />
          </Routes>
        </div>

        <FooterElement />
      </Router>
    </div>
  );
}

export default App;
