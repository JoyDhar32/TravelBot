import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center gap-8 md:gap-12 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(./bg.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-extrabold text-3xl lg:text-7xl md:text-7xl text-[#f56551]">
          TripBot: Your AI Travel Companion
        </h1>
        <h3 className="font-extrabold text-xl lg:text-5xl md:text-5xl text-white my-4">
          Discover Personalized Journeys with Cutting-Edge AI Technology
        </h3>
        <p
          className="text-lg lg:text-2xl md:text-2xl mx-4 md:mx-16 lg:mx-16 text-white my-4"
          style={{ lineHeight: "40px" }}
        >
          Discover Personalized Journeys with Cutting-Edge AI Technology.
          AdventureBot is your ultimate AI-powered trip planner app, designed to
          create personalized travel experiences. Seamlessly plan your
          itineraries, uncover hidden gems, and get real-time recommendations
          tailored to your interests. Let AdventureBot transform the way you
          travel, making every journey uniquely yours.
        </p>
        <Link to="/create-trip">
          <button className="bg-[#f56551] text-white py-2 px-8 rounded-lg text-lg hover:bg-[#e53e3e] transition duration-300 mt-4 text-medium">
            Let's Create Trip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
