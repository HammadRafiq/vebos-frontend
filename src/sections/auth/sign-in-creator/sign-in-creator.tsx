import { ControlledTextField, FormProvider } from "@components/controlled-form";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/button";
import {
  ISignInCreator,
  signInCreatorInitialValue,
  signInCreatorSchema,
} from "./sign-in-creator.schema";
import toast from "react-hot-toast";
import { useCreatorLoginMutation } from "@root/src/service/auth";
import LoadingComponent from "@components/loading";
import { useRouter } from "next/navigation";

export const SignInCreatorForm = () => {
  const { push } = useRouter();
  const [mutation, { isLoading }] = useCreatorLoginMutation();

  const methods = useForm<any>({
    resolver: yupResolver<any>(signInCreatorSchema),
    defaultValues: signInCreatorInitialValue,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (formData: ISignInCreator) => {
    try {
      await mutation(formData).unwrap();
      toast.success("Logged In successfully");
      // push(GUEST_PATH?.root);
    } catch (error: any) {
      toast.error(error?.data?.message ?? "something went wrong");
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <LoadingComponent primaryLoading />}
      <div className=" space-y-10  bg-primary rounded-[24px] mt-[124px] py-[32px] lg:py-[56px] px-[24px] lg:px-[85px]">
        <ControlledTextField
          labelCss="text-white text-[20px]"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          type="text"
          textInputCss="w-full bg-white dark:text-black"
        />

        <ControlledTextField
          labelCss="text-white"
          name="password"
          label="Password"
          placeholder="Enter Link for company’s social media"
          type="password"
          textInputCss="w-full bg-white dark:text-black"
        />
      </div>
      <div className=" flex justify-between items-center">
        <Button variant="destructive" type="submit" className="mt-[48px]">
          Log In
        </Button>
        <Button
          onClick={() => push("sign-up-creator")}
          variant="destructive"
          type="button"
          className="mt-[48px] w-fit"
        >
          Sign Up as Creator
        </Button>
      </div>
    </FormProvider>
  );
};
