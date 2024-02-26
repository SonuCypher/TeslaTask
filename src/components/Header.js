import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navContainer">
      <a href="####">
        <img className="teslaIcon" alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Tesla%2C_Inc._-_Logo_%28black_script_version%29.svg" />
      </a>
      <div className="navbarItems">
            <p><a href="####">Model S</a></p>
            <p><a href="####">Model 3</a></p>
            <p><a href="####">Model X</a></p>
            <p><a href="####">Model Y</a></p>
      </div>
      <div className="navEndItems">
        <a href="####">Shop</a>
        <a href="####">Account</a>
      </div>
    </nav>
  );
}

export default Header;
