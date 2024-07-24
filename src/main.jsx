import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateTrip from "./createTrip/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "../router.jsx";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
   
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
