import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, ArtGallery, Topics, Contact } from "./Pages"; // Імпорт сторінок
import { HeaderElement, FooterElement } from "./components/layouts"; // Імпорт компонентів нафігації і підвалу

function App() {
  return (
    // Основний контейнер, який забезпечує мінімальну висоту сторінки і ширину
    <div className="flex flex-col min-h-screen w-full max-w-[1980px] m-auto">
      <Router>
        <HeaderElement />
        {/* Основний вміст сторінки, який рендериться в залежності від шляху */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/about" element={<About />} />{" "}
            <Route path="/gallery" element={<ArtGallery />} />{" "}
            <Route path="/topics" element={<Topics />} />{" "}
            <Route path="/contact" element={<Contact />} />{" "}
          </Routes>
        </div>
        <FooterElement />
      </Router>
    </div>
  );
}

export default App;
