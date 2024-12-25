import {
  CircleDesignTwo,
  LineBar,
  TickIconPrimary,
  YoutubeIcon,
} from "@assets/icons";
import {
  circleLines,
  girlImage,
  homeSocialMedia,
  serviceWeOffer,
  trendingImageFive,
  trendingImageFour,
  trendingImageOne,
  trendingImageThree,
  trendingImageTwo,
} from "@assets/images";
import { Button } from "@components/button";
import { Typography } from "@components/typography";
import { ServiceWeOfferData } from "@root/src/mock/home";
import Image from "next/image";
import React from "react";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const splideOptions = {
  perPage: 1,
  type: "loop",
  autoplay: true,
  arrows: false,
  rewind: true,
  gap: "1rem",
};
const HomeSections = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="full-screen-width-wrapper relative">
        <div className=" hidden lg:block absolute top-0 bottom-0 left-0">
          <CircleDesignTwo />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 relative section-padding">
        <div className="col-span-1 m-auto">
          <Image src={homeSocialMedia} alt=" social-media" />
        </div>
        <div className=" col-span-1 m-auto space-y-4">
          <Typography variant="div" className="relative">
            We Are In The Top
            <div className=" relative overflow-hidden w-fit whitespace-nowrap">
              Media Agencies
              <span className=" absolute left-0 right-0 -z-10 bottom-0">
                <LineBar />
              </span>
            </div>
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            praesent non amet, posuere vitae sed quam semper
          </Typography>
          <Button variant="destructive" className=" w-fit">
            Learn More
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-4 m-auto section-padding">
        <div className=" col-span-1 space-y-4">
          {/* <Typography variant="h1">What distinguish ourselves from</Typography> */}
          <Typography variant="div" className="relative">
            What Distinguish{" "}
            <span className="decorated-header"> Ourselves From</span> Others?
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            praesent non amet, posuere vitae sed quam semper
          </Typography>
          <ul className=" space-y-4">
            <li className=" flex space-x-6 ">
              <TickIconPrimary /> <div>Lorem ipsum dolor sit amet</div>
            </li>
            <li className=" flex space-x-6 ">
              <TickIconPrimary /> <div>Lorem ipsum dolor sit amet</div>
            </li>
            <li className=" flex space-x-6 ">
              <TickIconPrimary /> <div>Lorem ipsum dolor sit amet</div>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end">
            <div className="relative">
              <Image
                src={circleLines}
                className=" w-[300px] h-[300px]"
                alt="person-image"
              />
              <Image
                src={girlImage}
                className=" absolute top-3 bottom-0 right-0 left-2"
                alt="person-image"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="relative ">
              <Image
                src={circleLines}
                className=" w-[300px] h-[300px]"
                alt="person-image"
              />
              <Image
                src={girlImage}
                className=" absolute top-3 bottom-0 right-0 left-2"
                alt="person-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 full-screen-width-wrapper gap-10 md:gap-8 lg:gap-4 px-[20px] md:px-32 lg:px-14 section-padding bg-primary/15 relative">
        <Image
          src={circleLines}
          alt=" circle"
          className=" hidden lg:block absolute -top-40 -left-40"
        />
        <React.Fragment>
          <div className="col-span-1 m-auto">
            <Image src={serviceWeOffer} alt=" social-media" />
          </div>
          <div className=" col-span-1 lg:m-auto space-y-4">
            <Typography
              variant="div"
              className="relative overflow-hidden w-fit"
            >
              Services We Offer
              <span className=" absolute left-0 right-10 -z-10 bottom-0">
                <LineBar />
              </span>
            </Typography>
            {ServiceWeOfferData?.map(({ name, description, Icon }) => (
              <React.Fragment key={name}>
                <Icon />
                <Typography variant="h3">{name}</Typography>
                <Typography variant="body-small">{description}</Typography>
              </React.Fragment>
            ))}

            <Button variant="destructive" className=" w-fit">
              Learn More
            </Button>
          </div>
        </React.Fragment>
      </div>
      <div className=" space-y-4 section-padding">
        <Typography
          variant="div"
          className="relative overflow-hidden w-fit m-auto"
        >
          Trending & Viral Creators
          <span className=" absolute  left-20 right-0 -z-10 bottom-0">
            <LineBar />
          </span>
        </Typography>
        <Typography variant="body" className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
          <br />
          praesent non amet, posuere vitae sed quam semper
        </Typography>
        {/* only to show images in xl screens and md */}
        <div className=" hidden  md:grid grid-cols-7 gap-6">
          <div className="col-span-7 lg:col-span-2">
            <div className=" w-full relative  h-full rounded-lg overflow-hidden">
              <Image
                src={trendingImageOne}
                alt="person-image"
                className="w-full h-full object-cover"
              />
              <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                <Button
                  variant="destructive"
                  className="flex justify-between h-[69px] w-full"
                >
                  <span>@anna_soronio</span>
                  <YoutubeIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className=" col-span-7 lg:col-span-5">
            <div className=" grid grid-cols-6 gap-4">
              <div className=" col-span-4">
                {" "}
                <div className=" relative rounded-lg overflow-hidden">
                  <Image
                    src={trendingImageTwo}
                    alt="person-image"
                    className="w-full max-h-[350px] h-full object-cover"
                  />
                  <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                    <Button
                      variant="destructive"
                      className="flex justify-between h-[69px] w-full"
                    >
                      <span>@anna_soronio</span>
                      <YoutubeIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" col-span-2">
                {" "}
                <div className=" relative h-full rounded-lg overflow-hidden">
                  <Image
                    src={trendingImageThree}
                    alt="person-image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                    <Button
                      variant="destructive"
                      className="flex justify-between h-[69px] w-full"
                    >
                      <span>@anna_soronio</span>
                      <YoutubeIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" col-span-2">
                {" "}
                <div className=" h-full relative  rounded-lg overflow-hidden">
                  <Image
                    src={trendingImageFour}
                    alt="person-image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                    <Button
                      variant="destructive"
                      className="flex justify-between h-[69px] w-full"
                    >
                      <span>@anna_soronio</span>
                      <YoutubeIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className=" col-span-4">
                {" "}
                <div className=" relative rounded-lg overflow-hidden">
                  <Image
                    src={trendingImageFive}
                    alt="person-image"
                    className="w-full max-h-[350px] h-full object-cover"
                  />
                  <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                    <Button
                      variant="destructive"
                      className="flex justify-between h-[69px] w-full"
                    >
                      <span>@anna_soronio</span>
                      <YoutubeIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" block md:hidden">
          <Splide options={splideOptions}>
            {[
              trendingImageOne,
              trendingImageTwo,
              trendingImageThree,
              trendingImageFour,
              trendingImageFive,
            ].map((item, index) => (
              <SplideSlide key={index}>
                <div className=" w-full relative  h-full rounded-lg overflow-hidden">
                  <Image
                    src={item}
                    alt="person-image"
                    className="w-full h-full object-cover"
                  />
                  <div className=" absolute bottom-0 right-0 left-0 w-full px-4 backdrop-blur-[10px] py-10">
                    <Button
                      variant="destructive"
                      className="flex justify-between h-[69px] w-full"
                    >
                      <span>@anna_soronio</span>
                      <YoutubeIcon />
                    </Button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeSections;
