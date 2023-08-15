import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
