import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import CreateTrip from "./src/createTrip/index";
import Viewtrip from "./src/view-trip/[tripId]/index.jsx";
import MyTrips from "./src/my-trips/index.jsx";
import HomePage from "@/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/create-trip",
        element: <CreateTrip />,
      },
      {
        path: "/view-trip/:tripId",
        element: <Viewtrip />,
      },
      {
        path: "/my-trips",
        element: <MyTrips />,
      },
    ],
  },
]);

export default router;
