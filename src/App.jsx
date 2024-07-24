import { useState } from "react";
import "./App.css";

import Hero from "./components/custom/Hero";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import Footer from "./components/custom/Footer";

function App() {


  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
