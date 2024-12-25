import { LineBar } from "@assets/icons";
import { circleLines, personImage } from "@assets/images";
import { Typography } from "@components/typography";
import Image from "next/image";
import React from "react";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeSliderData } from "@root/src/mock/home";

const splideOptions = {
  breakpoints: {
    1200: { perPage: 3, drag: true },
    1000: { perPage: 2, drag: true },
    768: { perPage: 1, drag: true },
  },
  type: "loop",
  autoplay: true,
  arrows: false,
  rewind: true,
  gap: "1rem",
};
export const MeetOurTeam = () => {
  return (
    <div className="space-y-6 max-w-screen-xl m-auto section-padding">
      {" "}
      <div className="flex justify-center">
        <Typography variant="h1" className="relative text-center w-fit">
          Meet Our <span className=" decorated-header">Team</span> 
        </Typography>
      </div>
      <Typography variant="body" className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        <br />
        praesent non amet, posuere vitae sed quam semper
      </Typography>
      <div className=" hidden  lg:grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
          "Ashley Brian",
        ].map((item, index) => (
          <div
            key={index}
            className=" col-span-1 space-y-6 flex flex-col items-center"
          >
            <div className=" relative">
              <Image src={circleLines} className="" alt="person-image" />
              <Image
                src={personImage}
                className=" absolute top-3 bottom-0 right-0 left-2"
                alt="person-image"
              />
            </div>
            <Typography variant="h4" className="text-center">
              {item} - <span className=" font-normal">CEO</span>
            </Typography>
          </div>
        ))}
      </div>
      <div className=" block md:hidden">
        <Splide options={splideOptions}>
          {[
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
            "Ashley Brian",
          ].map((item, index) => (
            <SplideSlide key={index}>
              <div className=" space-y-10 p-[20px]">
                <div className=" relative">
                  <Image src={circleLines} className="" alt="person-image" />
                  <Image
                    src={personImage}
                    className=" absolute top-3 bottom-0 right-0 left-2"
                    alt="person-image"
                  />
                </div>
                <Typography variant="h4" className="text-center">
                  {item} - <span className=" font-normal">CEO</span>
                </Typography>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
