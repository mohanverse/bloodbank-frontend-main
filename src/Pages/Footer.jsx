import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@bloodbank.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Donate Blood</a>
              </li>
              <li>
                <a href="#">Request Blood</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <ul className="flex">
              <li>
                <a href="#">
                  <FaFacebookSquare className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaSquareXTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-white opacity-25" />
        <p className="text-center">
          &copy; 2024 Blood Bank. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
