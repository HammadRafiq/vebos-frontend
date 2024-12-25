import React from "react";
import CommonFooter from "@components/common-footer";
import { ServicesHeader } from "./services-header";
import { ServicesSections } from "./services-sections";
export const ServicesSection = () => {
  return (
    <div>
      <ServicesHeader />
      <ServicesSections />
      <CommonFooter />
    </div>
  );
};
