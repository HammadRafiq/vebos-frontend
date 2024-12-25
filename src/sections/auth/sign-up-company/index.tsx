import React from "react";
import { SignUpCompanyForm } from "./sign-up-company-form";
import Image from "next/image";
import { circleLines } from "@assets/images";
import { CircleDesignTwo } from "@assets/icons";

export const SignUpCompany = () => {
  return (
    <div className=" relative">
      {" "}
      <CircleDesignTwo className=" hidden lg:block  absolute top-0 -left-10" />
      <Image
        className=" w-[300px] h-[300px] absolute bottom-20 right-20 hidden lg:block "
        src={circleLines}
        alt="person-image"
      />
      <div className="lg:text-[64px] max-w-screen-md m-auto md:text-[48px] text-[36px]  font-bold lg:leading-[64px] text-center">
        Sign up as a Brand/<span className="decorated-header">Company</span>
      </div>
      <div className="max-w-screen-md m-auto">
        <SignUpCompanyForm />
      </div>
    </div>
  );
};
