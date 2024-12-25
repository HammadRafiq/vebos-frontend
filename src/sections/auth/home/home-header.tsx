import {
  CircleDesign,
  CircleLineImage,
  InstagramIcon,
  LineBar,
  YoutubeIcon,
} from "@assets/icons";
import { girlImage, personImage } from "@assets/images";
import { Button } from "@components/button";
import Image from "next/image";
import React from "react";
import { circleLines } from "@assets/images";
import { Typography } from "@components/typography";

export const HomeHeader = () => {
  return (
    <div className="relative">
      <div className="full-screen-width-wrapper relative">
        <div className=" absolute top-0 bottom-0 left-0">
          <CircleDesign />
        </div>
      </div>
      <div className="m-auto  relative pr-0 md:pr-[210px] lg:pr-[310px] ">
        {/* <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px] relative">
          A new era of Social Media{" "}
          <div className=" relative overflow-hidden w-fit whitespace-nowrap">
            for Talented
            <span className=" absolute left-0 right-0 -z-10 bottom-0">
              <LineBar />
            </span>
          </div>{" "}
          Creators
        </div> */}
        <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px] relative mb-5">
          A New Era Of Social Media <span className="decorated-header">For Talented</span> Creators{" "}
        </div>
        <div className=" max-w-screen-md space-y-6">
          <Typography variant="body">
            We are strategic consulting & media agency who works with and for
            creators. We are Looking for more talented creators to join our
            Team!
          </Typography>
          <Button variant="destructive">Join us</Button>
          <div className="flex space-x-8 items-center pt-6">
            <div className=" text-center">
              <Typography variant="h1" className="text-primary font-semibold">
                32M
              </Typography>
              <Typography variant="body" className="font-medium">
                Followers
              </Typography>
            </div>
            <div className=" text-center">
              <Typography variant="h1" className="text-primary font-semibold">
                43M
              </Typography>
              <Typography variant="body" className="font-medium">
                Revenue
              </Typography>
            </div>
            <div className=" text-center">
              <Typography variant="h1" className="text-primary font-semibold">
                29K
              </Typography>
              <Typography variant="body" className="font-medium">
                Creators
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden xl:block absolute -right-20 top-20">
        <div className=" relative w-full h-full">
          <Image
            className=" w-[300px] h-[300px]"
            src={circleLines}
            alt="person-image"
          />
          <Image
            src={personImage}
            className=" absolute top-3 bottom-0 right-0 left-2"
            alt="person-image"
          />
          <Button
            variant="destructive"
            className=" absolute bottom-0 right-0 left-0 w-full flex justify-between h-[69px]"
          >
            <span>@alex_james</span>
            <InstagramIcon />
          </Button>
        </div>
      </div>
      <div className="hidden xl:block absolute right-72 bottom-0">
        <div className=" relative w-full h-full">
          <Image
            src={circleLines}
            className=" w-[250px] h-[250px]"
            alt="person-image"
          />
          <Image
            src={girlImage}
            className=" absolute top-3 bottom-0 right-0 left-2"
            alt="person-image"
          />
          <Button
            variant="destructive"
            className=" absolute bottom-0 right-0 left-0 w-full flex justify-between h-[69px]"
          >
            <span>@anna_soronio</span>
            <YoutubeIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
