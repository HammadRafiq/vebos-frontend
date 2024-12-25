import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ControlledCheckbox,
  ControlledTextField,
  FormProvider,
} from "@components/controlled-form";
import { Button } from "@components/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/select";
import LoadingComponent from "@components/loading";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useGetSingleBrandCampaignMutation,
  usePostBrandCampaignMutation,
  useUpdateBrandCampaignMutation,
} from "@root/src/service/brand-api";

interface IBuyClip {
  brandName: string;
  brandIndustry: string;
  targetAudience: string;
  results: string;
  contentType: string;
  budget: number | null;
}
export const CreateCompaign = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [mutation, { isLoading }] = usePostBrandCampaignMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [singleMutation, { isLoading: singleLoading }] =
    useGetSingleBrandCampaignMutation();
  const [updateMutation, { isLoading: updateLoading }] =
    useUpdateBrandCampaignMutation();
  const { push } = useRouter();
  const methods = useForm<IBuyClip>({
    resolver: yupResolver<any>(
      yup.object().shape({
        brandName: yup.string().required(""),
        brandIndustry: yup.string().required(""),
        targetAudience: yup.string().required(""),
        results: yup.string().required(""),
        contentType: yup.string().required(""),
        budget: yup
          .number()
          .required("Budget is required")
          .min(0, "Budget must not be negative")
          .nullable(""),
      })
    ),
    defaultValues: {
      brandName: "",
      brandIndustry: "",
      targetAudience: "",
      results: "",
      contentType: "",
      budget: null,
    },
  });
  const { handleSubmit, reset } = methods;
  const getSingleData = async () => {
    if (!id) return;
    try {
      const data: any = await singleMutation(id).unwrap();
      const { __v, _id, brandId, ...rest } = data;
      reset({ id: _id, ...rest });
      setIsEdit(true);
    } catch (error: any) {
      // toast.error(error?.data?.message ?? "something went wrong");
    }
  };
  React.useEffect(() => {
    getSingleData();
  }, [id]);
  const onSubmit = async (formData: IBuyClip) => {
    if (isEdit) {
      try {
        await updateMutation(formData).unwrap();
        toast.success("Updated successfully");
        push("/campaigns");
      } catch (error: any) {
        toast.error(error?.data?.message ?? "something went wrong");
      }
    } else {
      try {
        await mutation(formData).unwrap();
        toast.success("Created successfully");
        push("/campaigns");
      } catch (error: any) {
        toast.error(error?.data?.message ?? "something went wrong");
      }
    }
  };
  if (singleLoading) return <LoadingComponent primaryLoading />;
  return (
    <div>
      <h1 className=" text-f32 font-bold">Create a Campaign</h1>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <LoadingComponent primaryLoading />}
        <div className="  max-w-screen-sm mt-[32px] space-y-8 ">
          <ControlledTextField
            name="brandName"
            label="Brand/company name"
            placeholder="Enter Brand/company name"
            type="text"
            textInputCss="w-full"
            labelCss="text-[20px]"
          />
          <ControlledTextField
            name="brandIndustry"
            label="Industry"
            placeholder="Enter Brand/company Industry"
            type="text"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="targetAudience"
            label="Target Audience"
            placeholder="Enter Target Audience"
            type="text"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="results"
            label="What specific results are you looking for from this campaign?"
            placeholder="Write in detail..."
            type="textarea"
            rows={8}
            textInputCss="w-full"
          />
          {/* <div>
            <label className={`text-f20 font-bold pb-1 `}>Content Type</label>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 mt-[12px]">
              <ControlledCheckbox
                name="blog_post"
                checkBoxLabel="Blog Post"
                styleLabel=""
              />
              <ControlledCheckbox
                name="social_media_post"
                checkBoxLabel="Social Media Post"
              />
              <ControlledCheckbox
                name="video_content"
                checkBoxLabel="Video Content"
              />
              <ControlledCheckbox
                name="photography"
                checkBoxLabel="Photography"
              />
              <ControlledCheckbox
                name="custom_artwork"
                checkBoxLabel="Custom Artwork/Graphics"
              />
            </div>
          </div> */}
          <ControlledTextField
            name="contentType"
            label="Content Type"
            placeholder="Enter Content Type"
            type="text"
            textInputCss="w-full"
          />
          {/* <div className=" space-y-3">
            <label htmlFor="" className={`text-f20 font-semibold `}>
              Budget for campaign
            </label>
            <Select>
              <SelectTrigger className=" placeholder:text-[#a9a8b1 ] w-full px-[20px] text-f16 rounded-[12px] font-normal bg-white ">
                <SelectValue placeholder="Select Niche" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">value 1</SelectItem>
                  <SelectItem value="banana">value 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
          <ControlledTextField
            name="budget"
            label="Budget for campaign"
            placeholder="Enter Budget"
            type="number"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="campaign_date"
            label="Enter Campaign Date"
            placeholder="Enter Campaign Date"
            type="text"
            textInputCss="w-full"
          />
          <Button
            variant="destructive"
            className="w-[250px] mt-[38px]"
            type="submit"
          >
            Create Campaign
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
