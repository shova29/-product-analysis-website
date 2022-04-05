import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <div className="mt-2 grid sm:flex justify-between items-center mx-24">
      <div>
        <img className="w-28 h-28 rounded-full" src={logo} alt="" srcset="" />
      </div>

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
