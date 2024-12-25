import { Typography } from "@components/typography";
import React, { useState } from "react";
import { YourClipDetail } from "./your-clip";
import { SubmitCreatorClipForm } from "./submit-clip";
import { PageLinkForm } from "./PageLinkForm";
import { EarningGraphSection } from "./earning-graph/earning-graph";
export const DashboardCreator = () => {
  const [addClip, setAddClip] = useState(1);
  return (
    <div>
      {addClip === 2 ? (
        <SubmitCreatorClipForm setAddClip={setAddClip} />
      ) : addClip === 3 ? (
        <PageLinkForm />
      ) : (
        <>
          {" "}
          <div className=" h-[150px] bg-primary rounded-[24px] px-[32px] py-[24px]">
            <Typography  variant="h3" className="text-white text-f24 ">
              Estimated Revenue
            </Typography>
            <Typography
              variant="h3"
              className="text-f48 font-bold text-white"
            >
              $152,78.00
            </Typography>
          </div>
          <div>
            <EarningGraphSection/>
          </div>
          <YourClipDetail setAddClip={setAddClip} />
        </>
      )}
    </div>
  );
};
