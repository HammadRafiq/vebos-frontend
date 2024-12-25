import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { earningGraphData, earningOptions } from "./earning-graph.data";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@components/select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const EarningGraphSection = () => {
  return (
    <div className=" border-2 p-[10px] md:p-[24px] mt-[26px] border-[#1D1D1D] rounded-[26px]">
      <div className=" flex justify-between items-center mb-[50px]">
        <h1 className=" text-f16 lg:text-f28 font-bold">Earning in the last 30 days</h1>
        <Select>
          <SelectTrigger className="w-[100px] px-1  py-1 md:w-[200xpx] border-black mt-[7px] bg-transparent text-black rounded-[8px]">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">value 1</SelectItem>
              <SelectItem value="banana">value 2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Line options={earningOptions as any} data={earningGraphData} />
    </div>
  );
};
