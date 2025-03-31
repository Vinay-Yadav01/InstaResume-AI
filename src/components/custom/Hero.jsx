import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="h-[90vh] text-center w-full flex justify-around items-center">
      <div className="w-[100vw] flex flex-col  justify-start items-start">
        <h1 className="text-7xl space-grotesk-700 w-full">
          Your AI-Powered Resume Builder
        </h1>
        <p className="text-xl text-gray-600 mt-2 text-start w-full ml-24">
          Crafting Careers, One Resume at a Time
        </p>

        <div
          className="flex gap-5 items-center 
        text-start w-full ml-24 justify-start mt-10"
        >
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="square w-[298px] h-[281px] bg-[#4732BA] opacity-[6%] rounded-2xl absolute -translate-x-96 -translate-y-40 rotate-[-13deg]"></div>
        <img src="./Thumbnail.png" alt="Thumbnail" width="100%" />
      </div>
    </div>
  );
}

export default Hero;
