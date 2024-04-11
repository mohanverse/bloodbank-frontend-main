import React from "react";
import backgroundImage from "../assets/home2.jpg"; // Import your background image
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth:'84%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
        <p className="text-lg text-white mb-8">Welcome to the Admin Dashboard.</p>
        <div className="flex justify-center">
          <button className="bg-red-800 text-white px-6 py-3 rounded-md font-bold">
            Manage Users
          </button>
          <Link to={'/all-blooddonation'} className="bg-red-800 text-white px-6 py-3 rounded-md font-bold ml-4">
            Manage Donations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
