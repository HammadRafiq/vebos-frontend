import { collectionImage } from "@assets/images";
import { Button } from "@components/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/select";
import { Typography } from "@components/typography";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
type Props = {
  setAddClip: (addClip: boolean) => void;
};
export const CollectionData = ({ setAddClip }: Props) => {
  return (
    <div>
      <div>
        {" "}
        <Select>
          <SelectTrigger className="w-[228px]">
            <SelectValue placeholder="Select Niche" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">value 1</SelectItem>
              <SelectItem value="banana">value 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[48px]">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => (
          <div key={item} className=" col-span-1">
            <div className=" max-h-[350px] h-full w-full rounded-[30px] border-2 overflow-hidden border-primary pb-[40px]">
              <Image
                src={collectionImage}
                width={292}
                height={232}
                alt="collection_img"
                className="w-full object-cover"
              />
              <Typography variant="h2" className=" mx-[16px] mt-[20px]">
                Three Skydivers Perform a Free-Fly Jump
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-end pt-[48px]">
        <Button
          variant="destructive"
          className=" w-[152px]"
          onClick={() => {
            setAddClip(true);
          }}
        >
          Next <ChevronRight className="ml-1 h-5" />
        </Button>
      </div>
    </div>
  );
};
