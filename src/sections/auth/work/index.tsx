import React from "react";
import { WorkHeader } from "./work-header";
import { WorkSections } from "./work-sections";
import CommonFooter from "@components/common-footer";

export const WorkSection = () => {
  return (
    <div>
      <WorkHeader />
      <WorkSections />
      <CommonFooter />
    </div>
  );
};
