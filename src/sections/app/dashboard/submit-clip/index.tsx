import {
  ControlledCheckbox,
  ControlledFileUpload,
  ControlledTextField,
  FormProvider,
} from "@components/controlled-form";
import { Typography } from "@components/typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/button";
import {
  CreaterSubmitClipInitialValue,
  ICreatorClipForm,
  submitCreatorClipSchema,
} from "./submit-schema";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/select";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCreatorClipSubmitMutation } from "@root/src/service/creator-api";
import LoadingComponent from "@components/loading";

export const SubmitCreatorClipForm = ({ setAddClip }: any) => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useCreatorClipSubmitMutation();
  const [videoFile, setVideoFile] = useState<null | File>(null);
  const methods = useForm<ICreatorClipForm>({
    resolver: yupResolver<any>(submitCreatorClipSchema),
    defaultValues: CreaterSubmitClipInitialValue,
  });
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { isDirty, errors },
  } = methods;

  const onSubmit = async (formData: ICreatorClipForm) => {
    if (!formData.video) {
      toast.error("Please upload a video");
      return;
    }

    const formDataVal = new FormData();

    // Access the file object from the reference
    const videoFile = formData.video[0];

    formDataVal.append("video", videoFile);
    formDataVal.append("title", formData.title);
    formDataVal.append("niche", formData.niche);
    formDataVal.append("estRevenue", formData.estRevenue);

    try {
      await mutation(formDataVal).unwrap();
      toast.success("Clip Added Successfully");
      setAddClip(1);
    } catch (error: any) {
      toast.error(error?.data?.message ?? "Something went wrong");
    }
  };

  return (
    <div>
      <h1 className=" text-[32px] font-bold">Submit A Clip</h1>
      {isLoading && <LoadingComponent primaryLoading />}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-20 gap-y-8 mt-[32px] mb-[40px]">
          <div className=" col-span-2">
            <ControlledFileUpload
              control={control}
              name="video"
              label="Upload Files"
              getFileOnChange={(file: File) => {
                setVideoFile(file);
              }}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <ControlledTextField
              name="title"
              label="Title of the video"
              placeholder="Enter title of the video"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2 lg:col-span-1 lg:m-auto">
            {/* <label className={`text-f24 font-bold `}>Niche Selection</label>
            <Select>
              <SelectTrigger className="w-[228px] mt-[7px] bg-primary/10 text-primary">
                <SelectValue placeholder="Select Niche" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">value 1</SelectItem>
                  <SelectItem value="banana">value 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
            <ControlledTextField
              name="niche"
              label="Niche Selection"
              placeholder="Add niche"
              type="text"
              textInputCss="w-full"
            />
          </div>
          <div className=" col-span-2">
            <div className=" border-2 max-w-2xl border-primary rounded-[12px] py-[12px] px-[24px]">
              <Typography variant="h3">
                Estimated Revenue{" "}
                <span className="text-f16 font-normal px-2">
                  {" "}
                  (Based on the niche selected & TItle)
                </span>{" "}
              </Typography>
              <div className=" flex items-center space-x-2">
                <Typography variant="h3" className="text-primary mt-[4px]">
                  $
                </Typography>
                <ControlledTextField
                  showError={false}
                  name="estRevenue"
                  placeholder="Enter Amount"
                  type="number"
                  textInputCss="w-full border-0"
                />
              </div>
            </div>
            {!!errors.estRevenue?.message && (
              <h3
                className={
                  "text-f12 text-red-500 bg-white p-2 rounded-md  max-w-2xl mt-2"
                }
              >
                {errors?.estRevenue?.message as string}
              </h3>
            )}
          </div>
          <div className=" col-span-2">
            <Button variant="destructive" className="w-[200px]" type="submit">
              Submit a Clip
            </Button>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};
