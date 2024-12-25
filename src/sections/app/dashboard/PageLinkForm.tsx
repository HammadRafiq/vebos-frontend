import { Button } from "@components/button";
import {
  ControlledCheckbox,
  ControlledTextField,
  FormProvider,
} from "@components/controlled-form";
import LoadingComponent from "@components/loading";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatorPageSubmitMutation } from "@root/src/service/creator-api";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

export const PageLinkForm = () => {
  const [mutation, { isLoading }] = useCreatorPageSubmitMutation();
  const methods = useForm<{ link: string; grantLicense: boolean }>({
    resolver: yupResolver<any>(
      yup.object().shape({
        link: yup
          .string()
          .required("Link is required")
          .matches(/^(ftp|http|https):\/\/[^ "]+$/, "Invalid link format"),
      })
    ),
    defaultValues: { link: "", grantLicense: false },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (formData: {
    link: string;
    grantLicense: boolean;
  }) => {
    try {
      await mutation(formData).unwrap();
      toast.success("Page Link Added successfully");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong");
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingComponent primaryLoading />}
      <div className="  max-w-screen-sm">
        <ControlledTextField
          name="link"
          label="Page link"
          placeholder="Paste the link of your page"
          type="text"
          textInputCss="w-full"
        />
        <div className=" mt-[32px]">
          <ControlledCheckbox
            name="grantLicense"
            checkBoxLabel="Grant as the exclusive license to use this."
          />
        </div>
        <Button
          variant="destructive"
          className="w-[200px] mt-[38px]"
          type="submit"
        >
          Submit a Page
        </Button>
      </div>
    </FormProvider>
  );
};
