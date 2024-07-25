import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl my-5">Places to Visit</h2>
      <div>
        {trip?.tripData?.itinerary.map((item, index) => (
          <div className="">
            <h2 className="font-medium text-lg">Day: {item.day}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {item.plan.map((place, index) => (
             <PlaceCardItem place={place} />
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
