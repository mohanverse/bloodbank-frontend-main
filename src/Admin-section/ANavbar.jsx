import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/logo 3.png";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";





// Assuming you have imported the hamburger icon from react-icons

function ANavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:flex">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block md:w-64 h-screen bg-red-600 text-white">
        <div className="flex justify-center p-4 font-bold ">
            <div className="">
            <img src={logo} alt="" className="w-[100px]" />
            <h1>Admin Panel</h1>
            </div>
        </div>
        <div className=" flex justify-center font-bold ">
            <ul className="p-4 font-bold">
                <li className="flex justify-start p-2 items-center  hover:text-black hover:bg-white">
                    <IoMdHome className="w-8 h-8" />
                    <Link to={'/adminpage'}>Amin Home</Link>
                </li>
                <li className="flex justify-start p-2 items-center  hover:text-black hover:bg-white">
                    <BiSolidDonateBlood className="w-8 h-8" />
                    <Link to={'/all-blooddonation'}>Blood Donation</Link>
                </li>
                <li className="p-2 flex justify-start items-center  hover:text-black hover:bg-white">
                    <MdBloodtype  className="w-8 h-8" />
                    <Link to={'/all-bloodrequets'}>Blood Request</Link>
                </li>
                <li className="p-2 flex justify-start items-center  hover:text-black hover:bg-white">
                    <RiMessage2Fill className="w-8 h-8" />
                    <Link>Message</Link>
                </li>
                <li className="p-2 flex justify-start items-center hover:text-black hover:bg-white">
                    <RiLogoutBoxFill className="w-8 h-8" />
                    <Link>Logout</Link>
                </li>
            </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="lg:hidden bg-red-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center text-xl font-bold">
            <img src={logo} alt="" className="w-[60px]"/>
            <h1>Admin Panel</h1>
            </div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar for small screens */}
        {isMenuOpen && (
            <div className="md:hidden p-4 bg-red-600">
              <div className="flex flex-col space-y-2 text-white p-2 text-md font-bold">
                <Link  to={'/adminpage'} className="flex items-center text-white hover:text-black hover:bg-white p-2">
                <IoMdHome className="w-8 h-8" />
                Admin Home
                </Link>
                <Link  to={'/all-blooddonation'} className="flex items-center text-white hover:text-black hover:bg-white p-2">
                <BiSolidDonateBlood className="w-8 h-8" />
                Blood Donation
                </Link>
                <Link to={'/all-bloodrequets'} className="flex items-center text-white hover:text-black hover:bg-white p-2">
                <MdBloodtype  className="w-8 h-8" />
                Blood Request
                </Link>
                <Link className="flex items-center text-white hover:text-black hover:bg-white p-2">
                <RiMessage2Fill className="w-8 h-8" />
                Message
                </Link>
                <Link className="flex items-center text-white hover:text-black hover:bg-white p-2">
                <RiLogoutBoxFill className="w-8 h-8" />
                Logout
                </Link>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default ANavbar;
