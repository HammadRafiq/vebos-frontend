import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ControlledTextField, FormProvider } from "@components/controlled-form";
import { Button } from "@components/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { usePostFullTimeCreateMutation } from "@root/src/service/brand-api";
import LoadingComponent from "@components/loading";

interface IBuyClip {
  niche: string;
  budget: number | null;
  videosNeeded: string;
  goals: string;
}
export const RequestFullTimeCreator = () => {
  const [mutation, { isLoading }] = usePostFullTimeCreateMutation();
  const methods = useForm<IBuyClip>({
    resolver: yupResolver<any>(
      yup.object().shape({
        niche: yup.string().required(""),
        budget: yup
          .number()
          .required("Budget is required")
          .min(0, "Budget must not be negative")
          .nullable(""),
        videosNeeded: yup.string().required(""),
        goals: yup.string().required(""),
      })
    ),
    defaultValues: {
      niche: "",
      budget: null,
      videosNeeded: "",
      goals: "",
    },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (formData: IBuyClip) => {
    try {
      await mutation(formData).unwrap();
      toast.success("Created successfully");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong");
    }
  };
  return (
    <div>
      <h1 className=" text-f32 font-bold">Request A Full Time Creator</h1>
      {isLoading && <LoadingComponent primaryLoading />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="  max-w-screen-sm mt-[32px] space-y-8 ">
          <ControlledTextField
            name="niche"
            label="Niche/topic"
            placeholder="Enter Niche/topic"
            type="text"
            textInputCss="w-full"
            labelCss="text-[20px]"
          />
          <ControlledTextField
            name="budget"
            label="Budget range"
            placeholder="Enter Budget range"
            type="number"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="videosNeeded"
            label="How many uploads a month/ how many videos needed?"
            placeholder="Write in detail..."
            type="textarea"
            rows={8}
            textInputCss="w-full"
          />
          <ControlledTextField
            name="goals"
            label="What are your goals?"
            placeholder="Paste links here"
            type="text"
            textInputCss="w-full"
          />
          <Button
            variant="destructive"
            className="w-fit mt-[38px]"
            type="submit"
          >
            Submit Request
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
