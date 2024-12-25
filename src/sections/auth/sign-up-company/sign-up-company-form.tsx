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
} from "./sign-up-company.schema";
import { ShareFile, tiktokImage } from "@assets/images";
import Image from "next/image";
import UploadIcon from "@assets/icons/upload";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/select";
import { useBrandSignUpMutation } from "@root/src/service/auth";
import toast from "react-hot-toast";
import LoadingComponent from "@components/loading";
import { useRouter } from "next/navigation";

export const SignUpCompanyForm = () => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useBrandSignUpMutation();
  const fileInputRef: any = useRef(null);

  const methods = useForm<any>({
    resolver: yupResolver<any>(signUpCreatorSchema),
    defaultValues: signUpCreatorInitialValue,
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: ISignUpCreator) => {
    try {
      await mutation(formData).unwrap();
      toast.success("Account Created successfully");
      reset();
      push("/sign-in-company");
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong");
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingComponent primaryLoading />}
      <div className=" space-y-10  bg-primary rounded-[24px] mt-[40px] md:mt-[124px] py-[32px] lg:py-[56px] px-[24px] lg:px-[85px]">
        <ControlledTextField
          labelCss="text-white"
          name="name"
          label="Brand/company name"
          placeholder="Enter Brand/company name"
          type="text"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="representative"
          label="Brand/company representative"
          placeholder="Enter Brand/company representative’s name"
          type="text"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="email"
          label="Company’s email address"
          placeholder="Enter Company’s email address"
          type="text"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="phone"
          label="Company’s phone number"
          placeholder="Enter Company’s phone number"
          type="number"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          rows={6}
          labelCss="text-white"
          name="needs"
          label="What's your needs?"
          placeholder="Write your needs in detail..."
          type="textarea"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="budget"
          label="Budget for campaign/content"
          placeholder="Budget"
          type="number"
          textInputCss="w-full bg-white text-black"
        />
        {/* <div className=" space-y-3">
          <label htmlFor="" className={`text-f20 text-white font-semibold `}>
            Budget for campaign/content
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
          labelCss="text-white "
          name="webLink"
          label="Link for company’s website"
          placeholder="Enter Link for company’s website"
          type="text"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="socialLink"
          label="Link for company’s social media"
          placeholder="Enter Link for company’s social media"
          type="text"
          textInputCss="w-full bg-white text-black"
        />
        <ControlledTextField
          labelCss="text-white"
          name="password"
          label="Password"
          placeholder="Enter Link for company’s social media"
          type="password"
          textInputCss="w-full bg-white text-black"
        />
      </div>
      <Button variant="destructive" type="submit" className="mt-[48px]">
        Sign up
      </Button>
    </FormProvider>
  );
};
