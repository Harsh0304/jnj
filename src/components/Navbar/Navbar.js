import React from "react";
import logo from "../../img/finpro-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container nav_container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="messsege">
        <h2>We are here to support Ask iGenie</h2>
      </div>
    </div>
  );
};

export default Navbar;
