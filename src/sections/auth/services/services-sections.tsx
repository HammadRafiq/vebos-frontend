import { LineBar, TickIconPrimary } from "@assets/icons";
import {
  circleLines,
  serviceManageImage,
  servicePaidImage,
  serviceProtectionImage,
} from "@assets/images";
import { Typography } from "@components/typography";
import { manageService } from "@root/src/mock/service";
import Image from "next/image";
import React from "react";

export const ServicesSections = () => {
  return (
    <div className="">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 section-padding">
        <div className=" col-span-1 space-y-6">
          <h1 className="text-[96px] font-medium leading-[64px] text-primary">
            01
          </h1>
          <Typography variant="div" className="relative">
            Manage + Distribute{" "}
            <span className=" decorated-header">+ Optimize</span>
          </Typography>
          <Typography variant="body">
            Managing, uploading and making the best from your content.our team
            can also handle your content at every platform
          </Typography>
          <Typography variant="body" className="font-semibold">
            this service includes:
          </Typography>
          <ul className=" space-y-6">
            {manageService?.map((item) => (
              <li key={item} className=" flex space-x-6 ">
                <TickIconPrimary /> <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 m-auto">
          <Image
            src={serviceManageImage}
            alt=" social-media"
            className=" object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 full-screen-width-wrapper gap-10 md:gap-8 lg:gap-4 px-[20px] md:px-32 lg:px-14 bg-primary/15 relative section-padding">
        {" "}
        <Image
          src={circleLines}
          alt=" circle"
          className=" hidden lg:block absolute -top-40 -left-40 object-cover"
        />
        <div className="col-span-1 m-auto">
          <Image
            src={serviceProtectionImage}
            alt=" social-media"
            className=" object-cover"
          />
        </div>
        <div className=" col-span-1 space-y-6">
          <h1 className="text-[96px] font-medium leading-[64px] text-primary">
            02
          </h1>
          <Typography variant="div" className="relative">
            Multi-Platform
            <div className=" relative overflow-hidden w-fit whitespace-nowrap">
              Asset Protection
              <span className=" absolute left-0 right-0 -z-10 bottom-0">
                <LineBar />
              </span>
            </div>
          </Typography>
          <Typography variant="body">
            Digital Rights Management everywhere at any length of asset. Content
            ID (soon) YouTube copyright protection system. Locates your videos
            across YouTube and start making a profitfrom your work
          </Typography>
          <Typography variant="body" className="font-semibold">
            this service includes:
          </Typography>
          <ul className=" space-y-6">
            {manageService?.map((item) => (
              <li key={item} className=" flex space-x-6 ">
                <TickIconPrimary /> <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 section-padding">
        <div className=" col-span-1 space-y-6">
          <h1 className="text-[96px] font-medium leading-[64px] text-primary">
            03
          </h1>
          <Typography variant="div" className="relative">
            Getting Paid As
            <div className=" relative overflow-hidden w-fit whitespace-nowrap">
              Soon As Possible
              <span className=" absolute left-0 right-0 -z-10 bottom-0">
                <LineBar />
              </span>
            </div>
          </Typography>
          <Typography variant="body">
            Get paid for your work as soon as we receive it - Skip unnecessary
            waiting time. We will get you collaborations with brands around the
            world on top of our own projects in the e-com and apps marketsIf you
            want to know more, just ask
          </Typography>
          <Typography variant="body" className="font-semibold">
            this service includes:
          </Typography>
          <ul className=" space-y-6">
            {manageService?.map((item) => (
              <li key={item} className=" flex space-x-6 ">
                <TickIconPrimary /> <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 m-auto">
          <Image
            src={servicePaidImage}
            alt=" social-media"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};
