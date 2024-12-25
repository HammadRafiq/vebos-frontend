import { Button } from "@components/button";
import { Typography } from "@components/typography";
import React from "react";
import { useRouter } from "next/navigation";
export const BrandCollaboration = () => {
  const { push } = useRouter();
  return (
    <div className=" space-y-8">
      <Typography variant="h3">Brand Collaboration</Typography>
      {new Array(6)?.fill("").map((item, index) => (
        <div
          key={index}
          className=" border-2 border-[#252525] rounded-[24px] p-[24px]"
        >
          <div className=" block space-y-2 lg:space-y-0 md:flex justify-between items-center">
            <Typography variant="h3">Brand Collaboration</Typography>
            <div className=" max-w-[224px] w-full bg-primary/10 rounded-full text-center py-[10px]">
              <h1 className=" text-f14 text-primary">Budget: $5,500/month</h1>
            </div>
          </div>
          <h1 className=" text-f14 font-medium my-[16px]">
            Lörem ipsum faligen stenogåpp säpojogg. Hehebel domess alltså
            metatopi. Besk lare lar. Godör digital tvilling homosk. Nylingar
            pseudongen. Euronade savären prende de andronetik. Oresebyrå
            alternativa fakta antidosamma spedok. Vast ajur tel iriktigt vanade.
            Faling bimiktig tilig, doska. Nysm tredöng fadöre. Tasigförsamhet
            exosade dikeheten infraren rel. Gåjerade säment.
          </h1>
          <div className=" flex justify-end">
            <Button
              className="w-[190px] rounded-[48px] text-[14px] font-semibold text-white"
              onClick={() => {
                push("brand-collaboration/submit-profile-as-creator");
              }}
            >
              Apply for campaign
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
