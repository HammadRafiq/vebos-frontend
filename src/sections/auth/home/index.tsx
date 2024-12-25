import React from "react";
import { HomeHeader } from "./home-header";
import { HomeSlider } from "./home-slider";
import HomeSections from "./home-sections";
import CommonFooter from "@components/common-footer";
export const HomeSection = () => {
  return (
    <div className="">
      <HomeHeader />
      <HomeSlider />
      <HomeSections />
      <CommonFooter />
    </div>
  );
};
