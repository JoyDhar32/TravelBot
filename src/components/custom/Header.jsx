import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, []);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
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
        window.location.reload();
      });
  };
  return (
    <>
      <div className="p-2 shadow-sm flex justify-between items-center px-5 md:px-12">
       <Link to="/">
        <img
          src="./logo.svg"
          alt="logo"
          className="h-16 w-24 md:h-16 md:w-40 lg:h-16 lg:w-40 "
        />
</Link>
        <div>
          {user ? (
            <div className="flex gap-5 item-center">
              <Link to="/my-trips">
                <Button variant="outline" className="mr-2 rounded-full">
                  My Trip{" "}
                </Button>
              </Link>
              <Popover>
                <PopoverTrigger>
                  {" "}
                  <img
                    src={user?.picture}
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <h2
                    className="cursor-poiner"
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button
              variant="outline"
              className="mr-2"
              onClick={() => setOpenDialog(true)}
            >
              Sign In
            </Button>
          )}
        </div>
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogClose className="absolute top-4 right-4">
                <button
                  aria-label="Close"
                  className="hover:scale-105 transition-all cursor-pointer"
                  onClick={() => setOpenDialog(false)}
                >
                  ❌
                </button>
              </DialogClose>
              <DialogDescription>
                <img src="/logo.svg" />
                <p className="font-bold text-lg mt-6">Sign In With Google</p>
                <p>
                  To generate a travel plan, you need to sign in with google
                </p>
                <Button
                  className="w-full mt-4 flex gap-2 items-center"
                  onClick={login}
                >
                  <FcGoogle className="h-7 w-7" />
                  Sign In With Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Header;
