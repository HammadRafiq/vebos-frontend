import {
  ControlledCheckbox,
  ControlledFileUpload,
  ControlledTextField,
  FormProvider,
} from "@components/controlled-form";
import { Typography } from "@components/typography";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IClipForm,
  SubmitClipInitialValue,
  submitClipSchema,
} from "./submit-clip.schema";
import Link from "next/link";
import { Button } from "@components/button";

export const SubmitClipForm = () => {
  const methods = useForm<IClipForm>({
    resolver: yupResolver(submitClipSchema),
    defaultValues: SubmitClipInitialValue,
  });
  const { handleSubmit, control } = methods;

  const onSubmit = (formData: IClipForm) => {
    console.log(formData, "check form dat");
  };
  return (
    <div>
      <div className=" text-center lg:text-[64px] md:text-[48px] text-[32px]  font-bold lg:leading-[64px]">
        Submit <span className="decorated-header">A Clip</span>
      </div>
      <Typography
        variant="body-small"
        className=" text-center mt-[24px] max-w-lg m-auto"
      >
        Got a Viral Clip or a Cool clip? Want to start making money from it?
        Submit it to us, And we will get you paid!
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-20 gap-y-6 mt-[112px] mb-[40px]">
          <div className=" col-span-2">
            <ControlledFileUpload
              control={control}
              name="files"
              label="Upload Files"
            />
          </div>
          <div className=" col-span-2 lg:col-span-1">
            <ControlledTextField
              name="clipUrl"
              label="Enter Clip URL"
              placeholder="Enter Clip URL"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-1">
            <ControlledTextField
              required
              name="title"
              label="Title"
              placeholder="Enter Clip Title"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              name="description"
              label="Clip description (Optional)"
              placeholder="Enter Phone"
              type="textarea"
              rows={6}
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              required
              name="firstName"
              label="First Name"
              placeholder="Enter first name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              required
              name="lastName"
              label="Last Name"
              placeholder="Enter last name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              required
              name="email"
              label="Email"
              placeholder="Enter last name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              required
              name="phone"
              label="Phone"
              placeholder="Enter last name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              name="tiktokUsername"
              label="TikTok Username (optional)"
              placeholder="Enter last name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              name="instagramUserName"
              label="TikTok Username (optional)"
              placeholder="Enter last name"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className="col-span-2 block lg:flex space-y-3 lg:space-y-0 space-x-0 lg:space-x-16">
            <ControlledCheckbox
              checkBoxLabel="I Recorder the video or own the rights"
              name="ownRights"
            />
            <ControlledCheckbox
              checkBoxLabel="I am 18 years or older"
              name="olderthanEighteen"
            />
            <ControlledCheckbox
              checkBoxLabel={
                <div>
                  I agree to the
                  <Link href="#" className="text-primary font-semibold ml-1">
                    split submission terms
                  </Link>{" "}
                </div>
              }
              name="splitSubmissionTerms"
            />
          </div>
          <div className=" col-span-2">
            <ControlledCheckbox
              checkBoxLabel={
                <div>
                  I agree to the
                  <Link href="#" className="text-primary font-semibold ml-1">
                    pay submission terms
                  </Link>{" "}
                </div>
              }
              name="splitSubmissionTerms"
            />
          </div>
          <div className=" col-span-2 lg:col-span-2">
            <ControlledTextField
              name="description"
              label="Your Signature"
              type="textarea"
              rows={6}
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2">
            <Button variant="destructive" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};
