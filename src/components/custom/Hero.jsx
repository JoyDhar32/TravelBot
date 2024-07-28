import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-12 mt-12 min-h-screen">
    <h1 className="font-extrabold text-3xl lg:text-7xl md:text-7xl  text-[#f56551]">
      AdventureBot: Your AI Travel Companion
    </h1>
    <h3 className="font-extrabold text-xl lg:text-5xl md:text-5xl  text-gray-700">
    Discover Personalized Journeys with Cutting-Edge AI Technology
    </h3>
    <p className="text-lg lg:text-2xl md:text-2xl mx-4 md:mx-16 lg:mx-16 text-bold text-gray-600">
      Discover Personalized Journeys with Cutting-Edge AI Technology. AdventureBot is your ultimate AI-powered trip planner app, designed to create personalized travel experiences. Seamlessly plan your itineraries, uncover hidden gems, and get real-time recommendations tailored to your interests. Let AdventureBot transform the way you travel, making every journey uniquely yours.
    </p>
    <Link to="/create-trip">
    <Button>Let's Create Trip</Button>
    </Link>
  </div>
  )
}

export default Hero