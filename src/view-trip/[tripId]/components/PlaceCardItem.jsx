import { Button } from "@/components/ui/button";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlaceCardItem = ({ place }) => {
  const placeCom = place;
  return (
    <div>
      <div className="">
        <h2 className="font-medium text-sm text-orange-600">
          Best Time: {placeCom?.time}
        </h2>
        <Link
          to={
            "https://www.google.com/maps/search/?api=1&query=" + placeCom?.place
          }
          target="_blank"
        >
          <div className="border border-xl p-3 mt-2 flex gap-5 hover:bg-gray-100 hover:shadow cursor-pointer rounded-md">
            <img
              src="/placeholder.jpeg"
              className="w-[150px] h-[130px] rounded-xl"
            />
            <div>
              <h2 className="font-bold text-lg">{placeCom?.place}</h2>

              <p className="text-md text-gray-600">{placeCom?.details} </p>
              <div className="flex justify-between items-center">
                <h2 className="mt-2">⏱️{placeCom?.time_to_travel}</h2>
                <h2 className="mt-2">🎫{placeCom?.ticket_pricing}</h2>
              </div>
              {/* <Button size="sm"><FaSearchLocation /></Button> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCardItem;
