import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="menu">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);



export default Header;