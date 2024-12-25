import { CircleDesignTwo, LineBar } from "@assets/icons";
import { Typography } from "@components/typography";
import React from "react";

export const AboutUsSections = () => {
  return (
    <div className=" relative">
      <div className="hidden lg:block full-screen-width-wrapper relative">
        <div className=" absolute top-0 left-0">
          <CircleDesignTwo />
        </div>
      </div>
      <div className="space-y-6 pt-[60px] lg:pt-[120px] ">
        {" "}
        <Typography variant="div" className="relative w-fit overflow-hidden ">
          <span className=" absolute left-0 right-0 -z-10 bottom-0">
            <LineBar />
          </span>
          Our Background
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          praesent non amet, posuere vitae sed quam semper Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Tortor praesent non amet, posuere
          vitae sed quam semper Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Tortor praesent non amet, posuere vitae sed quam
          semper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          praesent non amet, posuere vitae sed quam semper
        </Typography>
      </div>
      <div className="space-y-5 max-w-screen-lg lg:ml-auto pt-[64px] pb-[60px] lg:pb-[100px]">
        <Typography variant="div" className="relative w-fit lg:ml-auto overflow-hidden">
          <div className="absolute left-0 right-0 -z-10 bottom-0">
            <LineBar />
          </div>
          Our Mission
        </Typography>
        <Typography variant="body" className="lg:text-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          praesent non amet, posuere vitae sed quam semper Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Tortor praesent non amet, posuere
          vitae sed quam semper Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Tortor praesent non amet, posuere vitae sed quam
          semper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          praesent non amet, posuere vitae sed quam semper
        </Typography>
      </div>
    </div>
  );
};
