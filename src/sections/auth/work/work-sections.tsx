import { LineBar } from "@assets/icons";
import {
  addToNextLevelImage,
  circleLines,
  contentCreatorImage,
  girlImage,
  personImage,
} from "@assets/images";
import { Button } from "@components/button";
import { Typography } from "@components/typography";
import Image from "next/image";
import React from "react";

export const WorkSections = () => {
  return (
    <div className="">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 section-padding">
        {" "}
        <div className="col-span-1">
          <div className=" m-auto relative">
            <Image src={circleLines} className=" max-h-[400px] max-w-[400px]" alt="person-image"/>
            <Image
              src={girlImage}
              className=" absolute top-3 bottom-0 max-h-[350px] max-w-[350px] w-full h-full right-0 left-4 object-cover"
              alt="person-image"
            />
          </div>
        </div>
        <div className=" col-span-1 m-auto space-y-6">
          <Typography variant="div" className="relative">
            Take Your Ads To A <span>Next Level</span>
          </Typography>
          <Typography variant="body">
            Managing, uploading and making the best from your content.our team
            can also handle your content at every platform Managing, uploading
            and making the best from your content.our team can also handle your
            content at every platform.
          </Typography>
          <Button variant="destructive" className=" w-fit">
            Contact us
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 full-screen-width-wrapper gap-10 md:gap-8 lg:gap-4 px-[20px] md:px-32 lg:px-52 bg-primary/15 relative section-padding">
        {" "}
        <div className=" col-span-1 m-auto space-y-6">
          <Typography variant="div" className="relative">
            Collaborate With <span className="decorated-header">Content Creators</span>
          </Typography>
          <Typography variant="body">
            Managing, uploading and making the best from your content.our team
            can also handle your content at every platform Managing, uploading
            and making the best from your content.our team can also handle your
            content at every platform.
          </Typography>
          <Button variant="destructive" className=" w-fit">
            Contact us
          </Button>
        </div>
        <div className="col-span-1 m-auto">
          <div className=" relative w-full h-full ">
            <Image src={circleLines} className="" alt="person-image" />
            <Image
              src={contentCreatorImage}
              className=" absolute top-3 bottom-0 right-0 left-2"
              alt="person-image"
            />
          </div>
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 section-padding">
        {" "}
        <div className="col-span-1">
          <div className=" m-auto relative w-full h-full">
            <Image src={circleLines} className="" alt="person-image" />
            <Image
              src={personImage}
              className=" absolute top-3 bottom-0 right-0 left-2"
              alt="person-image"
            />
          </div>
        </div>
        <div className=" col-span-1 m-auto space-y-6">
          <Typography variant="div" className="relative">
            Take Your Ads To The <span className="decorated-header">Next Level</span>
          </Typography>
          <Typography variant="body">
            Managing, uploading and making the best from your content.our team
            can also handle your content at every platform Managing, uploading
            and making the best from your content.our team can also handle your
            content at every platform.
          </Typography>
          <Button variant="destructive" className=" w-fit">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};
