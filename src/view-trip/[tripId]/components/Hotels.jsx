import React from "react";
import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl my-5"> Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotel_options?.map((item, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.name+","+item?.address} target='_blank'>
          <div className="hover:scale-105 transition-all cursor-pointer">
            <img src="/placeholder.jpeg" className="rounded-xl" />
            <div className="my-2 flex flex-col gap-2">
                <h2 className="font-bold text-lg">{item?.name}</h2>
                <p className="text-sm text-gray-500">📍{item?.address}</p>
                <div className="flex justify-between items-center">
                <p className="text-sm font-medium">💰{item?.price}</p>
                <p className="text-sm font-medium">🌟{item?.rating}</p>
                </div>
            </div>
          </div>
      </Link>

        ))}
      </div>
    </div>
  );
};

export default Hotels;
