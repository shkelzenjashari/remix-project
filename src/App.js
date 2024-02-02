import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaceitStats from "./FaceitStats/FaceitStats";
import ErrorPage from "./ErrorPage/ErrorPage";
import GoogleTranslate from "./Translater/GoogleTranslate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faceit" element={<FaceitStats />} />
          <GoogleTranslate />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
