import React from "react";
import { Button } from "./button";
import { CircleDesignTwo, CircleLineImage } from "@assets/icons";
import { circleLinesWhite } from "@assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typography } from "./typography";

const CommonFooter = () => {
  const { push } = useRouter();
  return (
    <div className="full-screen-width-wrapper px-[20px] md:px-32 lg:px-14 section-padding relative overflow-hidden flex flex-col justify-center items-center space-y-6  bg-primary text-white">
      {" "}
      <div className="hidden lg:block absolute left-20">
        <CircleDesignTwo color="#fff" />
      </div>
      <Image
        src={circleLinesWhite}
        alt="circle-lines-white"
        className=" absolute right-0 -top-40 hidden lg:block"
      />
      <Typography variant="h1" className="text-center">
        Want To Boost Your <br /> Social Media Game?
      </Typography>
      <Typography variant="body" className="text-center">
        Lorem ipsum dolor sit amet, consectetur
        <br />
        praesent non amet, posuere vitae sed quam semper
      </Typography>
      <Button
        onClick={() => {
          push("/contact-us");
        }}
        variant="secondary"
        className=" w-fit"
      >
        Contact Now
      </Button>
    </div>
  );
};

export default CommonFooter;
