import { db } from "@/service/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";

const Viewtrip = () => {
  const { tripId } = useParams();
  const [trip,setTrip] = useState([]);
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  /**
   * Get trip data
   */
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Documents:", docSnap.data());
      setTrip(docSnap.data())
    } else {
      toast.error("No such document", {
        className: "text-red-900 font-bold my-16",
      });
    }
  };


  return (
  <div className="p-10 md:px-20 lg:px-44 xl:px-56">
    
{/* Information Section*/}
<InfoSection trip={trip} />

{/* Recommended Hotels */}
<Hotels trip={trip} />

{/* Daily Plan*/}


{/* Footer */}



  </div>
  );
};

export default Viewtrip;
