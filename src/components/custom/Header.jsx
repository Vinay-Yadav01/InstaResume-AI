import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between text-white p-4 px-8 shadow-md h-[100px]">
      <div className="h-full">
        <Link to="/">
          <img
            src={import.meta.env.VITE_IMG_PATH}
            alt="banner"
            className="h-full hidden min-[500px]:block"
          />
        </Link>
        <Link to="/">
          <img
            src="./logo2_enhanced.png"
            alt="banner"
            className="h-full hidden max-[500px]:block"
          />
        </Link>
      </div>
      {isSignedIn ? (
        <div className="flex items-center h-full w-max gap-5">
          <Link to="/dashboard">
            <Button
              variant="outline"
              className="font-serif font-medium text-lg text-primary"
            >
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="font-serif font-medium text-lg mr-5">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
