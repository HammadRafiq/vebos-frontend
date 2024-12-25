import React from "react";
import { AboutUsHeader } from "./about-us-header";
import { AboutUsSections } from "./about-us-Sections";
import CommonFooter from "@components/common-footer";
import { MeetOurTeam } from "./meet-our-team";
import { CustomerReviews } from "./customer-reviews";

export const AboutUsSection = () => {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsSections />
      <MeetOurTeam />
      <CustomerReviews />
      <CommonFooter />
    </div>
  );
};
