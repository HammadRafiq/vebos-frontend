import { CircleDesign, LineBar } from "@assets/icons";
import { workHeaderImage } from "@assets/images";
import { Typography } from "@components/typography";
import Image from "next/image";
import React from "react";

export const WorkHeader = () => {
  return (
    <div className=" relative pb-[60px] lg:pb-[120px]">
      <div className="full-screen-width-wrapper relative">
        <div className=" absolute top-0 bottom-0 left-0">
          <CircleDesign />
        </div>
      </div>
      <div className=" grid grid-cols-6 gap-4 ">
        <div className="col-span-6 lg:col-span-4 space-y-6">
          {/* <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px] relative">
            A Trusted place 
            <div className=" relative overflow-hidden w-fit whitespace-nowrap">
            to advertise
              <span className=" absolute left-0 right-0 -z-10 bottom-0">
                <LineBar />
              </span>
            </div>{" "}
          </div> */}
          <div className="lg:text-[96px] md:text-[60px] text-[48px]  font-bold lg:leading-[96px] relative">
            A Trusted Place <span className="decorated-header">To Advertise</span>
          </div>
          <Typography variant="body">
            We are strategic consulting & media agency who works with and for
            creators. We are Looking for more talented creators to join our
            Team!
          </Typography>
        </div>
        <div className=" col-span-6 lg:col-span-2 m-auto">
          <Image src={workHeaderImage} alt="service-social-icons" />
        </div>
      </div>
    </div>
  );
};
