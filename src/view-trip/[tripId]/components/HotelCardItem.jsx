import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCardItem = ({ item }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    item && GetPlacePhoto();
  }, [item]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: item?.name,
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
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        item?.name +
        "," +
        item?.address
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={photoUrl?photoUrl:'/placeholder.jpeg'} className="rounded-xl h-[220px] w-full object-cover" />
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
  );
};

export default HotelCardItem;
