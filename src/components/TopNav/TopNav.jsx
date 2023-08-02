import React from "react";
import "./TopNav.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav__nav-items">
        <Link to="/">
          <div className="topNav__nav-items--app-name">
            <h1 className="app-name">TICKR</h1>
          </div>
        </Link>

        <div className="topNav__nav-items--options">
          <Link to="/stock">
            <p className="text">STOCKS</p>
          </Link>
          <Link to="/crypto">
            <p className="text">CRYPTO</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
