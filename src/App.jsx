import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stock from "./pages/Stock/Stock";
import Crypto from "./pages/Crypto/Crypto";

const App = () => {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
