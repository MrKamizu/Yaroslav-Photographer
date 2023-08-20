import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ArtGallery from "./Pages/ArtGallery";
import Topics from "./Pages/Topics";
import FooterElement from "./Components/FooterElement";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1980px] m-auto">
      <Router>
        <Header />

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
