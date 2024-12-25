import { EditIcon } from "@assets/icons/edit-icon";
import { CreatorImage } from "@assets/images";
import { Button } from "@components/button";
import LoadingComponent from "@components/loading";
import { Pagination } from "@components/pagination-component";
import {
  useDeleteBrandCampaignMutation,
  useGetBrandCampaignQuery,
  useGetBrandClipQuery,
} from "@root/src/service/brand-api";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface TableProps {
  data: Array<{
    campaignName: string;
    status: string;
    campaignDate: string;
    budget: string;
    creator: string;
  }>;
}

export const CampaignTable: React.FC<TableProps> = ({ data }) => {
  const {push}=useRouter()
  const [mutation, { isLoading: deleteLoading }] =
    useDeleteBrandCampaignMutation();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data: campaignData, isLoading } = useGetBrandCampaignQuery({
    limit,
    page,
  });

  if (isLoading) return <LoadingComponent primaryLoading />;
  const deleteHandler = async (item: any) => {
    try {
      await mutation(item?._id).unwrap();
      toast.success("Deleted successfully");
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong");
    }
  };
  return (
    <>
      {deleteLoading && <LoadingComponent primaryLoading />}
      <div className="border-2 w-full mt-[24px] border-gray-500 border-collapse rounded-[24px] overflow-hidden">
        <table className="w-full">
          <thead className=" hidden md:table-header-group">
            <tr>
              {[
                "Campaign name",
                "Status",
                // "Campaign Date",
                "Campaign Industry",
                "Audience",
                "Budget",
                "Creator",
                "Action",
              ].map((item) => (
                <th
                  key={item}
                  className="pl-[32px] pt-[24px] text-start text-f16 font-semibold text-[#515151]"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaignData?.items.length > 0 ? (
              campaignData?.items?.map((item: any, index: number) => (
                <tr key={index}>
                  <td
                    className={` pl-[20px] md:pl-[32px] py-[10px] md:py-[24px] flex md:table-cell  text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    {item.brandName}
                  </td>
                  <td
                    className={`pl-[20px] md:pl-[10px] pr-[26px] flex md:table-cell py-[10px] md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    <div className=" bg-[#1D9300]/10 border-2 border-[#1D9300] text-[#1D9300] rounded-full text-center px-3">
                      {item.status}
                    </div>
                  </td>
                  {/* <td
                className={`pl-[20px] md:pl-[32px] py-[10px] md:py-[24px] text-f16 font-medium ${
                  index === data.length - 1
                    ? ""
                    : "md:border-b-2 border-gray-500"
                }`}
              >
                {item.campaignDate}
              </td> */}
                  <td
                    className={`pl-[20px] md:pl-[32px] py-[10px] md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    {item.brandIndustry}
                  </td>
                  <td
                    className={`pl-[20px] md:pl-[32px] py-[10px] md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    {item.targetAudience}
                  </td>
                  <td
                    className={`pl-[32px] py-[10px] md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    {item.budget}
                  </td>
                  <td
                    className={`pl-[32px] py-[10px] md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    <Image src={CreatorImage} alt="creator_image" />
                  </td>
                  <td
                    className={`pl-[32px] py-[10px] items-center space-x-3 md:py-[24px] text-f16 font-medium ${
                      index === data.length - 1
                        ? ""
                        : "md:border-b-2 border-gray-500"
                    }`}
                  >
                    <Button
                      onClick={() => {
                        push(`/campaigns/create-campaign?id=${item?._id}`);
                      }}
                      type="button"
                      className="w-fit h-fit p-2"
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      type="button"
                      className="w-fit h-fit p-2"
                      onClick={() => deleteHandler(item)}
                    >
                      <Trash2 width="20px" height="20px" />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <h1>No Campaign Available</h1>
            )}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-end w-full">
        <Pagination
          totalItems={campaignData?.total}
          itemsPerPage={limit}
          currentPage={page}
          handlePageChange={(page: any) => {
            setPage(page);
          }}
        />
      </div>
    </>
  );
};
