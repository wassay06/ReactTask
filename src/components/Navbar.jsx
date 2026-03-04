import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Awesome App</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>
          <button className="download-btn">Download Now</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;