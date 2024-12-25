import { CircleDesign, LineBar } from "@assets/icons";
import { aboutUsHeaderImage } from "@assets/images";
import { Typography } from "@components/typography";
import Image from "next/image";
import React from "react";

export const CollectionHeader = () => {
  return (
    <div className=" relative pb-[20px]">
      <div className="full-screen-width-wrapper relative">
        <div className=" -z-10 absolute top-0 bottom-0 left-0">
          <CircleDesign />
        </div>
      </div>
      <div className=" grid grid-cols-8 gap-4">
        <div className=" col-span-8 lg:col-span-6 space-y-6">
          {/* <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px] relative">
            What goes behind
            <div className=" relative overflow-hidden w-fit whitespace-nowrap">
              vebos media
              <span className=" absolute left-0 right-0 -z-10 bottom-0">
                <LineBar />
              </span>
            </div>{" "}
          </div> */}
          <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px]">
            Watch our <span className="decorated-header">collection</span>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-2 m-auto">
          <Image src={aboutUsHeaderImage} alt="service-social-icons" />
        </div>
      </div>
    </div>
  );
};
