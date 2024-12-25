import { AddIcon } from "@assets/icons";
import { Button } from "@components/button";
import { Typography } from "@components/typography";
import React from "react";
import { CampaignTable } from "./campaigns-table";
import { tableData } from "./capaigns-table.data";
import { useRouter } from "next/navigation";

export const Campaigns = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className="block space-y-2 lg:space-y-0 lg:flex justify-between items-center">
        <h1 className="text-f32 font-bold">Your Campaigns</h1>{" "}
        <Button
          className=" w-[250px] text-white rounded-[48px]"
          onClick={() => {
            push("/campaigns/create-campaign");
          }}
        >
          <AddIcon className=" mr-3" />
          Create a Campaign
        </Button>
      </div>

      <CampaignTable data={tableData} />
    </div>
  );
};
