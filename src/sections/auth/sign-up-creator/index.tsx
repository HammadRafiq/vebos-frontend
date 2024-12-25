import React from "react";
import { SignUpCreatorForm } from "./sign-up-creator";
import { CircleDesignTwo } from "@assets/icons";
import Image from "next/image";
import { circleLines } from "@assets/images";

export const SignUpCreater = () => {
  return (
    <div className=" relative">
      {" "}
      <CircleDesignTwo className=" hidden lg:block  absolute top-0 -left-10" />
      <Image
        className=" w-[300px] h-[300px] absolute bottom-20 right-20 hidden lg:block "
        src={circleLines}
        alt="person-image"
      />
      <div className="lg:text-[64px] md:text-[48px] text-[36px]  font-bold lg:leading-[64px] text-center">
        Sign Up <span className="decorated-header">As A creator</span>
      </div>
      <div className="max-w-screen-md m-auto">
        <SignUpCreatorForm />
      </div>
    </div>
  );
};