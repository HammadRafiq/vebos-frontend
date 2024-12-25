import { Typography } from "@components/typography";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ControlledTextField, FormProvider } from "@components/controlled-form";
import { Button } from "@components/button";
import toast from "react-hot-toast";
import LoadingComponent from "@components/loading";
import { useCreatorProfileSubmitMutation } from "@root/src/service/creator-api";

interface ISubmitProfileAsCreator {
  fullname: string;
  tiktokId: string;
  youtube: string;
  clipLink: string;
}
export const SubmitProfileAsCreator = () => {
  const [mutation, { isLoading }] = useCreatorProfileSubmitMutation();
  const methods = useForm<ISubmitProfileAsCreator>({
    resolver: yupResolver<any>(
      yup.object().shape({
        fullname: yup.string().required(""),
        tiktokId: yup.string().required(""),
        youtube: yup.string().required(""),
        clipLink: yup
          .string()
          .required("Link is required")
          .matches(/^(ftp|http|https):\/\/[^ "]+$/, "Invalid link format"),
      })
    ),
    defaultValues: { fullname: "", tiktokId: "", youtube: "", clipLink: "" },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (formData: ISubmitProfileAsCreator) => {
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
      {" "}
      <h1 className="text-f30 font-bold">
        Submit your profile as a full time creator
      </h1>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <LoadingComponent primaryLoading />}
        <div className="  max-w-screen-sm mt-[32px] space-y-8 ">
          <ControlledTextField
            name="fullname"
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            textInputCss="w-full"
            labelCss="text-[20px]"
          />
          <ControlledTextField
            name="tiktokId"
            label="TikTok ID (Username)"
            placeholder="Enter your TikTok ID (Username)"
            type="text"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="youtube"
            label={
              <span>
                YouTube
                <br />
                <span className=" text-f16 font-normal w-full">
                  If you have a YouTube Channel
                </span>
              </span>
            }
            placeholder="Enter your Youtube Channel Link/username"
            type="text"
            textInputCss="w-full"
          />
          <ControlledTextField
            name="clipLink"
            label="Paste the link of the clip (A clip that the brand is interested in)"
            placeholder="Enter link"
            type="text"
            textInputCss="w-full"
          />
          <Button
            variant="destructive"
            className="w-[200px] mt-[38px]"
            type="submit"
          >
            Submit Profile
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
