import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { db } from "@/service/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleformData = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      (formData?.noOfDays > 7 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast.error("Please fill all the fields", {
        className: "text-red-900 font-bold my-16",
      });
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);
    // console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const docId = Date.now().toString();
  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    // Add a new document in collection "cities"
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate(`/view-trip/${docId}`);
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      });
  };

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])

  return (
    <div className="sm:px-10 px-5 md:px-32 lg:px-56 xl:px-72  mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences ✈️🏖️🏂🏽⛰️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        {" "}
        We will create a personalized itinerary for you based on your
        preferences.{" "}
      </p>

      <div className="flex flex-col gap-8 my-10">
        <h2 className="text-xl font-medium ">
          Select destination you prefer to travel
        </h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          selectProps={{
            value: place,
            onChange: (v) => {
              setPlace(v);
              handleformData("location", v);
            },
          }}
        />
        <div>
          <h2 className="text-xl font-medium my-2">
            How many days are you planning to travel?
          </h2>
          <Input
            placeholder="Enter number of days Ex:3"
            type="number"
            onChange={(e) => handleformData("noOfDays", e.target.value)}
          />
        </div>

        {/* For Budget */}
        <div>
          <h2 className="text-xl font-medium my-2">
            What is the budget you are planning to spend?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleformData("budget", item.title)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                  ${formData?.budget == item.title && " shadow-lg bg-gray-50"}
                  `}
              >
                <h2 className="text-5xl">{item.icon}</h2>
                <h2 className="font-bold text-xl text-gray-800">
                  {item.title}
                </h2>
                <p className="font-bold text-lg text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Number of People */}
        <div>
          <h2 className="text-xl font-medium my-2">
            Who are you travelling with?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleformData("traveler", item.people)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                  ${
                    formData?.traveler == item.people && " shadow-lg bg-gray-50"
                  }
                  `}
              >
                <h2 className="text-5xl">{item.icon}</h2>
                <h2 className="font-bold text-xl text-gray-800">
                  {item.title}
                </h2>
                <p className="font-bold text-lg text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-end">
        {" "}
        <Button onClick={onGenerateTrip} disabled={loading}>
          {loading ? (
           <> <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin mr-2 text-pink-600 cursor-pointer" /> Generating Data </>
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-6">Sign In With Google</h2>
              <p>To generate a travel plan, you need to sign in with google</p>
              <Button
                className="w-full mt-4 flex gap-2 items-center"
                onClick={login}
              >
                <FcGoogle className="h-7 w-7" />
                SignIn With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default index;
