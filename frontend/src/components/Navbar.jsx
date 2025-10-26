import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div style={{ backgroundColor: "#d4b922ff", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px",height:"6rem" }}>
        
        <div>
          <h2 style={{ color: "#fff", margin: 0 ,fontSize:"2.8rem"}}>TastyQuest</h2>
        </div>

        
        <div style={{ display: "flex", gap: "60px",marginRight:"4rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none",fontSize:"1.8rem" }}>Home</Link>
          <Link to="/recipes" style={{ color: "#fff", textDecoration: "none",fontSize:"1.8rem" }}>Recipes</Link>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none",fontSize:"1.8rem" }}>About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
