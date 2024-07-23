import { Button } from '@/components/ui/button';
import React from 'react'
import { FaShareAlt } from "react-icons/fa";

const InfoSection = ({trip}) => {
  return (
    <>
    <img src="/placeholder.jpeg" className="h-[365px] w-full object-cover rounded" />
    <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
        </h2>
    </div>
    <div className="flex justify-between items-center">
    <div className="flex gap-5">
        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">📅 {trip?.userSelection?.noOfDays} Day</h2>
        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">💰 {trip?.userSelection?.budget} Budget</h2>
        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">🪇 No. Of Traveler: {trip?.userSelection?.traveler}</h2>
    </div>
    <Button><FaShareAlt /> </Button>
    </div>
    </>
  )
}

export default InfoSection