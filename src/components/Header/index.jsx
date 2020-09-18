import React from "react";
import "./styles.css";

function Header({ image }) {
  return (
    <div className="headerContainer">
      <img src={image} alt="Company Logo" className="headerLogo" />
    </div>
  );
}

export default Header;
