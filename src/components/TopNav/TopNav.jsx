import React from "react";
import "./TopNav.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const TopNav = ({ page, textColor, textColor2 }) => {
  let navStyle = "topNav";

  switch (page) {
    case "homepage":
      navStyle += " for-homepage";
      break;
    case "others":
      navStyle += " for-pages";
      break;
    default:
      navStyle = navStyle;
  }

  let navText = "navText";
  switch (textColor) {
    case "white":
      navText += " for-homepage white-text";
      break;
    case "black":
      navText += " for-pages black-text";
      break;
    default:
      navText = navText;
  }

  let navItems = "navItems";
  switch (textColor2) {
    case "white":
      navItems += " for-homepage white-text item-white";
      break;
    case "black":
      navItems += " for-pages black-text item-black";
      break;
    default:
      navItems = navText;
  }

  return (
    <div className={navStyle}>
      <div className="topNav__nav-items">
        <Link to="/">
          <div className="topNav__nav-items--app-name">
            <h1 className={navText}>TICKR</h1>
          </div>
        </Link>

        <div className="topNav__nav-items--options">
          <Link to="/stock">
            <p className={navItems}>STOCKS</p>
          </Link>
          <Link to="/crypto">
            <p className={navItems}>CRYPTO</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
