import { LineBar } from "@assets/icons";
import { avatarImage } from "@assets/images";
import StarRating from "@components/Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar";
import Image from "next/image";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Typography } from "@components/typography";

const slideOptions = {
  perPage: 3,
  breakpoints: {
    1200: { perPage: 3, drag: true },
    1000: { perPage: 2, drag: true },
    768: { perPage: 1, drag: true },
  },
  type: "loop",
  autoplay: true,
  arrows: false,
  rewind: true,
  gap: "3rem",
};
export const CustomerReviews = () => {
  return (
    <div className="space-y-6 max-w-screen-xl m-auto section-padding">
      {" "}
      <div className="flex justify-center">
        <Typography variant="h1" className="relative text-center w-fit">
          Listen to our <span className=" decorated-header">Customers</span> 
        </Typography>
      </div>
      <Typography variant="body" className=" text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        <br />
        praesent non amet, posuere vitae sed quam semper
      </Typography>
      <div className=" p-6">
        <Splide options={slideOptions}>
          {[
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
            "Martin Jones",
          ].map((item, index) => (
            <SplideSlide key={index}>
              <div className=" p-2">
                <ReviewCard />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

const ReviewCard = () => {
  return (
    <div className=" h-[370px] rounded-lg p-6 border space-y-7  border-primary w-full text-center flex flex-col justify-center items-center">
      <Avatar>
        <AvatarImage
          src={
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          }
          alt="avatar-icon"
          className="object-cover my-auto"
        />
        <AvatarFallback>
          <BsFillPersonFill size={"2em"} color="#c1c1c1" />
        </AvatarFallback>
      </Avatar>
      <StarRating fixed value={5} />
      <Typography variant="body">
        Commonly used in the graphic, print & publishing industries for
        previewing visual mockups.
      </Typography>
      <Typography variant="h5">
        Martin Jones, <span className="font-normal">USA</span>
      </Typography>
    </div>
  );
};
