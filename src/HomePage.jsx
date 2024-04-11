import React, { useState, useEffect } from "react";
import backgroundImage1 from "./assets/home.jpg";
import backgroundImage2 from "./assets/home2.jpg";
import backgroundImage3 from "./assets/home3.jpg";
import backgroundImage4 from "./assets/home4.jpg";

function HomePage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3,backgroundImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000); // Change background every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
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

export default HomePage;
