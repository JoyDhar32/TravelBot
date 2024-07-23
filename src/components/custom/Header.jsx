import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="p-2 shadow-sm flex justify-between items-center px-5 md:px-12">
        
        <img
          src="./logo.svg"
          alt="logo"
          className="h-16 w-24 md:h-16 md:w-40 lg:h-16 lg:w-40 "
        />

        <div>
          <Button variant="outline" className="mr-2">
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
