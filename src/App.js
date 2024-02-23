import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import FaceitStats from "./FaceitStats/FaceitStats";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faceit" element={<FaceitStats />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
