import React from "react";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { homeSliderData } from "@root/src/mock/home";
import Image from "next/image";

const splideOptions = {
  perPage: 4,
  breakpoints: {
    1200: { perPage: 4, drag: true },
    1000: { perPage: 3, drag: true },
    768: { perPage: 2, drag: true },
  },
  type: "loop",
  autoplay: true,
  arrows: false,
  rewind: true,
  gap: "1rem",
};
export const HomeSlider = () => {
  return (
    <div className=" max-w-screen-lg m-auto pt-[115px]">
      <Splide options={splideOptions}>
        {homeSliderData.map((item, index) => (
          <SplideSlide key={index}>
            <div className=" flex justify-center items-center">
              <Image src={item} alt="slider-images" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
