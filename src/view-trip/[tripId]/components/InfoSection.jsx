import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <>
      <img
        src={photoUrl?photoUrl:'/placeholder.jpeg'}
        className="h-300px md:h-[400px] lg:h-[500px] w-full object-cover rounded"
      />
      <div className="my-5 flex flex-col gap-2">
        <h2 className="font-bold text-2xl">
          {trip?.userSelection?.location?.label}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">
            📅 {trip?.userSelection?.noOfDays} Day
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">
            💰 {trip?.userSelection?.budget} Budget
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-lg">
            🪇 No. Of Traveler: {trip?.userSelection?.traveler}
          </h2>
        </div>
        <Button>
          <FaShareAlt />{" "}
        </Button>
      </div>
    </>
  );
};

export default InfoSection;
