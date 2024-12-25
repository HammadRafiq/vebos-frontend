import {
  ControlledCheckbox,
  ControlledFileUpload,
  ControlledTextField,
  FormProvider,
} from "@components/controlled-form";
import { Typography } from "@components/typography";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Button } from "@components/button";
import {
  ISignUpCreator,
  signUpCreatorInitialValue,
  signUpCreatorSchema,
} from "./sign-up-creator.schema";
import { ShareFile, tiktokImage } from "@assets/images";
import Image from "next/image";
import UploadIcon from "@assets/icons/upload";
import toast from "react-hot-toast";
import { useCreatorSignUpMutation } from "@root/src/service/auth";
import LoadingComponent from "@components/loading";
import { useRouter } from "next/navigation";
import { ControlledDatePicker } from "@components/controlled-form/controlle-datepicker";

export const SignUpCreatorForm = () => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useCreatorSignUpMutation();
  const [videoName, setVideoName] = React.useState<null | File>(null);
  const fileInputRef: any = useRef(null);

  const methods = useForm<any>({
    resolver: yupResolver<any>(signUpCreatorSchema),
    defaultValues: signUpCreatorInitialValue,
  });
  const { handleSubmit, register, watch, setValue } = methods;

  const onSubmit = async (formData: ISignUpCreator) => {
    if (!videoName) {
      toast.error("Please upload a video");
      return;
    }
    const { tAndC, validationVideo, ...payload } = formData;
    const formDataToPost = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formDataToPost.append(key, value);
    });
    formDataToPost.append("validationVideo", videoName);
    try {
      await mutation(formDataToPost).unwrap(); // Assuming mutation is an asynchronous function
      toast.success("Account created successfully");
      push("/sign-in-creator");
    } catch (error: any) {
      toast.error(error?.data?.message ?? "Something went wrong");
    }
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type === "video/mp4") {
        setValue("validationVideo", file);
        setVideoName(file);
      } else {
        toast.error("Only MP4 files are supported.");
      }
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingComponent primaryLoading />}
      <div className=" space-y-10  bg-primary rounded-[24px] mt-[124px] py-[32px] lg:py-[56px] px-[24px] lg:px-[85px]">
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="name"
          label="Full Name"
          placeholder="Enter your name"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="paypal"
          label="PayPal Account"
          placeholder="Enter your PayPal email/username"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="country"
          label="Country"
          placeholder="Enter your country"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledDatePicker
          labelCss="text-white text-[20px]"
          name="dob"
          label="Date of birth"
          placeholder="Enter your date of birth"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="parentName"
          label={
            <span>
              Legal representatives/Parent name
              <br />
              <span className=" text-f16 font-normal w-full">
                for creator below 18 years old
              </span>
            </span>
          }
          placeholder="Enter your Legal representatives/Parent name"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="tiktokId"
          label="TikTok ID (Username)"
          placeholder="Enter your TikTok ID (Username)"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
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
          textInputCss="w-full bg-white dark:text-black"
        />
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="idCard"
          label={
            <span>
              Identity Card
              <br />
              <span className=" text-f16 font-normal w-full">
                Optional (For long term partnership)
              </span>
            </span>
          }
          placeholder="Enter your Youtube Channel Link/username"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />
        <div className=" space-y-3">
          <label htmlFor="" className={`text-f20 text-white font-semibold `}>
            Paste the link of the clip (A clip that we interested in)
          </label>
          <Image src={ShareFile} alt="share-file" />
          <ControlledTextField
            name="clipLink"
            placeholder="Enter link"
            type="text"
            textInputCss="w-full bg-white dark:text-black"
          />
        </div>
        <div>
          <Typography variant="h4" className="text-white">
            Creator&apos;s Validation
          </Typography>
          <Typography variant="body-small" className="text-white">
            Screen record of your TikTok&apos;s profile from the top that has
            profile picture on it, then scroll it down a bit, reverse. (Only to
            make sure that we buy it from original creator)
          </Typography>
          <Image src={tiktokImage} alt="tiktok_image" className="mt-[30px]" />
          <div className=" flex items-center space-x-5 h-full">
            <div className="bg-white rounded-[12px] mt-[16px] w-[265px] flex justify-center items-center relative h-[64px]">
              <div className=" flex items-center">
                <UploadIcon />
                <label className="cursor-pointer block w-full h-full p-4 dark:text-black">
                  Add a file
                </label>
              </div>
              <input
                {...register("validationVideo")}
                type="file"
                ref={fileInputRef}
                className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
            {videoName && (
              <div className="h-[64px] flex items-center">
                {videoName?.name}
              </div>
            )}
          </div>
        </div>
        <ControlledTextField
          labelCss="text-white"
          name="password"
          label="Password"
          placeholder="Enter Link for company’s social media"
          type="password"
          textInputCss="w-full bg-white dark:text-black"
        />
        <div>
          <Typography variant="h4" className="text-white">
            T&C
          </Typography>
          <ControlledCheckbox
            styleLabel="text-white pt-[15px] pl-2"
            name="tAndC"
            checkBoxLabel="I'm here agree to sell the particular clip to Vebos Media, not selling nor submitting to another website."
          />
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <Button variant="destructive" type="submit" className="mt-[48px]">
          submit
        </Button>
        <Button
          onClick={() => push("sign-in-creator")}
          variant="destructive"
          type="button"
          className="mt-[48px] w-fit"
        >
          Log In as Creator
        </Button>
      </div>
    </FormProvider>
  );
};
