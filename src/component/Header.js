import React from "react";

function Header() {
  return (
    <nav
      className="d-flex justify-content-around align-items-center"
      style={{ position: "fixed", width: "100%", zIndex: "1" }}
    >
      <h1>React Movie Cards</h1>
      <li>Home</li>

      <li>About</li>
    </nav>
  );
}

export default Header;
