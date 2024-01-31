import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaceitStats from "./FaceitStats/FaceitStats";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faceit" element={<FaceitStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
