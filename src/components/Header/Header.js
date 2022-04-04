import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container text-center mt-8">
      <Link to="/home">HOME</Link>
      <Link to="/reviews">REVIEWS</Link>
      <Link to="/dashboard">DASHBOARD</Link>
      <Link to="/blogs">BLOGS</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};

export default Header;
