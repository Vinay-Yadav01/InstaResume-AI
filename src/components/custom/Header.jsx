import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between text-white p-4 px-8 h-[70px] mx-10 ">
      <div className="h-full flex items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.svg" alt="logo" />
        </Link>
        <h1 className="text-lg space-grotesk-700 text-primary">
          InstaResume AI
        </h1>
      </div>
      <div className="flex items-center justify-between gap-3 h-full">
        <NavigationMenu>
          <NavigationMenuList className="h-full">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`inter font-medium text-[1.1rem] text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`inter font-medium text-[1.1rem] text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Services
                </NavigationMenuLink>
              </Link>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`inter font-medium text-[1.1rem] text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`inter font-medium text-[1.1rem] text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Learn More
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
        {isSignedIn ? (
          <div className="flex items-center h-full w-max gap-5">
            <Link to="/dashboard">
              <Button className="font-medium  inter text-md">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <Link to="/auth/sign-in">
            <Button className="inter font-medium text-md mr-5">
              Get Started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
