import React from "react";
import backgroundImage from "../assets/home.jpg"; // Import your background image

function HomePagein() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="w-[400px] md:w-[650px] md:px-16 md:py-16">
        <div className="p-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-red-600">
            Join the movement of people helping people
          </h1>
        </div>
        <div className="p-2">
          <p className="text-xl sm:text-2xl text-white">
            Be a champion for humanity this March and sign up for The Human
            Race.
          </p>
        </div>
        <div className="p-2">
        <button className="bg-red-800 text-white px-10 py-3 rounded-md font-bold">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
}

export default HomePagein;
