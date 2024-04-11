import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo 3.png";
import { Link } from "react-router-dom";

function BNavesec() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDonateOpen(false);
    setIsRequestOpen(false); // Close request menu when toggling main menu
  };

  const toggleDonateMenu = () => {
    setIsDonateOpen(!isDonateOpen);
    setIsRequestOpen(false); // Close request menu when toggling donate menu
  };

  const toggleRequestMenu = () => {
    setIsRequestOpen(!isRequestOpen);
    setIsDonateOpen(false); // Close donate menu when toggling request menu
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
          <div className="flex item-center md:hidden gap-4">
            <button className="bg-red-800 text-white px-6 py-2 rounded-md">
              <Link className="text-white hover:text-gray-200" to={"/login"}>
                Login
              </Link>
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
              <Link to={"/"} className="text-white hover:text-gray-200">
                Home
              </Link>
              <div className="relative">
                <button className="text-white hover:text-gray-200 focus:outline-none" onClick={toggleDonateMenu}>
                  Donate
                </button>
                {isDonateOpen && (
                  <div className="absolute bg-white mt-2 py-2 px-4 rounded-md shadow-lg w-[200px]">
                    <Link to={"/donationform"} className="block text-black hover:text-gray-200">
                      Donation Form
                    </Link>
                    <Link to={"/donation"} className="block text-black  hover:text-gray-200">
                     Donation Status
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button className="text-white hover:text-gray-200 focus:outline-none" onClick={toggleRequestMenu}>
                  Request
                </button>
                {isRequestOpen && (
                  <div className="absolute bg-white mt-2 py-2 px-4 rounded-md shadow-lg w-[200px]">
                    <Link to={"/bloodrequest"} className="block text-black hover:text-gray-200">
                      Blood Request
                    </Link>
                    <Link to={"/allbloodrequest"} className="block text-black hover:text-gray-200">
                      Request status
                    </Link>
                  </div>
                )}
              </div>
              <Link to={"/login"}>
                <button className="bg-red-800 text-white px-6 py-2 rounded-md">
                  Log out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Show menu for small screens */}
      {isOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-2 text-white p-2 text-md font-bold">
            <Link to={"/"} className="text-white hover:text-black hover:bg-white p-2">
              Home
            </Link>
            <div className="relative">
              <div className="text-white hover:text-black hover:bg-white p-2 focus:outline-none" onClick={toggleDonateMenu}>
                Donate
              </div>
              {isDonateOpen && (
                <div className="bg-white mt-2 py-2 px-4 rounded-md shadow-lg">
                  <Link to={"/donationform"} className="block text-black hover:text-gray-200">
                  Donation Form
                  </Link>
                  <Link to={"/donation"} className="block text-black hover:text-gray-200">
                  All Donation
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <div className="text-white hover:text-black hover:bg-white p-2 focus:outline-none w-full" onClick={toggleRequestMenu}>
              Request
              </div>
              {isRequestOpen && (
                <div className="bg-white mt-2 py-2 px-4 rounded-md shadow-lg">
                  <Link to={"/bloodrequest"} className="block text-black hover:text-gray-200">
                  Blood Request from
                  </Link>
                  <Link to={"/allbloodrequest"} className="block text-black hover:text-gray-200">
                  Approve Request
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default BNavesec;
