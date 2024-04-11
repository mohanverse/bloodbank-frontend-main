import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo 3.png";
import { Link } from "react-router-dom";

function BNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 rounded-sm shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={'/'}>
            <img src={logo} alt="Blood bank" className="w-20" />
            </Link>
            <h1 className="text-white font-bold text-xl">Blood Bank</h1>
          </div>
          <div className="flex item-cenetr md:hidden gap-4">
            <button className="bg-red-800 text-white px-6 py-2 rounded-md">
            <Link className="text-white hover:text-gray-200" to={'/login'}>Login</Link>
            </button>
            <button
              className="text-white hover:text-gray-200 focus:outline-none"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
          <div className="md:flex hidden">
            <div className="flex items-center space-x-4 text-md font-bold">
              <Link to={'/adminlogin'} className="text-white hover:text-gray-200" >Admin</Link>
              <Link to={'/aboutus'} className="text-white hover:text-gray-200">About</Link>
              <Link className="text-white hover:text-gray-200">Services</Link>
              <Link to={'/contactus'} className="text-white hover:text-gray-200">Contact</Link>
              <Link to={'/login'}>
                <button className="bg-red-800 text-white px-6 py-2 rounded-md">
                  Login
                </button>
              </Link>
            </div>
          </div>
          {/* You can add additional menu items or components here */}
        </div>
      </div>
      {/* Show menu for small screens */}
      {isOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-2 text-white p-2 text-md font-bold">
            <Link  to={'/adminlogin'} className="text-white hover:text-black hover:bg-white p-2">
              Admin
            </Link>
            <Link className="text-white hover:text-black hover:bg-white p-2">
              About
            </Link>
            <Link className="text-white hover:text-black hover:bg-white p-2">
              Services
            </Link>
            <Link className="text-white hover:text-black hover:bg-white p-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default BNavbar;
