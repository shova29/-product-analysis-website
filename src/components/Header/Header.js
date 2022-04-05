import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <div className="container mt-4 flex sm:flex mx-20 justify-between mr-4 justify-between items-center">
      <img className="w-24 rounded-circle" src={logo} alt="" srcset="" />
      <nav className="flex sm:flex ">
        <CustomLink to="/home">HOME</CustomLink>
        <CustomLink to="/reviews">REVIEWS</CustomLink>
        <CustomLink to="/dashboard">DASHBOARD</CustomLink>
        <CustomLink to="/blogs">BLOGS</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
      </nav>
    </div>
  );
};

{
  /* container justify-between items-center mr-12 mx-20 text-center mt-8 */
}

{
  /* <div className='container flex sm:flex justify-between items-center justify-between items-center'>
   
  
    </div> */
}

export default Header;
