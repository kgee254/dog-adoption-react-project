import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dog Adoption Portal</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Dog</Link></li>
        <li><Link to="/products">View Dogs</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
