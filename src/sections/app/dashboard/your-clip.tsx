import { AddIcon } from "@assets/icons";
import { clipOne, clipThree, clipTwo } from "@assets/images";
import { Button } from "@components/button";
import LoadingComponent from "@components/loading";
import { Pagination } from "@components/pagination-component";
import { Typography } from "@components/typography";
import { useGetCreatorClipQuery } from "@root/src/service/creator-api";
import Image from "next/image";
import React, { useState } from "react";

export const YourClipDetail = ({ setAddClip }: any) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetCreatorClipQuery({
    limit,
    page,
  });
  console.log(data, "checkdata");

  if (isLoading) return <LoadingComponent primaryLoading />;
  return (
    <div>
      <div className=" block lg:flex space-y-6 lg:space-y-0 justify-between items-center mt-[45px] mb-[24px]">
        {" "}
        <Typography variant="h3" className=" text-f28 md:text-f32 font-bold">
          Clips you have Submitted
        </Typography>
        <div className=" flex md:block justify-end">
          <Button
            className=" w-[191px] text-white rounded-[48px]"
            onClick={() => {
              setAddClip(2);
            }}
          >
            <AddIcon className=" mr-3" />
            Submit a Clip
          </Button>
        </div>
      </div>
      <div className=" border-2 border-black rounded-[24px] p-[24px]">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data?.items?.length > 0 ? (
            data?.items?.map((item: any) => (
              <div key={item?._id}>
                {/* <Image
                  src={item?.url}
                  alt="clip_path"
                  className="w-full object-cover h-[245px] rounded-[24px]"
                  width={344}
                  height={245}
                /> */}
                <video
                  className="w-full h-[245px] rounded-[24px]"
                  width="full"
                  height="245"
                  controls
                >
                  <source src={item.url} type="video/mp4" />
                </video>
                <Typography variant="body-small" className="mt-[16px]">
                  {item?.title}
                </Typography>
              </div>
            ))
          ) : (
            <h1 className="text-center my-5">No Clip Found</h1>
          )}
        </div>
      </div>
      <div className=" flex justify-end w-full">
        <Pagination
          totalItems={data?.total}
          itemsPerPage={limit}
          currentPage={page}
          handlePageChange={(page: any) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
};
