import * as yup from "yup";

export interface ISignUpCreator {
  name: string;
  email: string;
  password: string;
  paypal: string;
  country: string;
  parentName: string;
  dob: string;
  tiktokId: string;
  youtube: string;
  idCard: string;
  clipLink: string;
  validationVideo: File | null;
  tAndC: string;
}

export const signUpCreatorInitialValue = {
  name: "",
  email: "",
  password: "",
  paypal: "",
  country: "",
  parentName: "",
  dob: "",
  tiktokId: "",
  youtube: "",
  idCard: "",
  clipLink: "",
  validationVideo: null,
  tAndC: false,
};
export const signUpCreatorSchema = yup.object().shape({
  name: yup.string().required(""),
  email: yup.string().email().required(""),
  password: yup.string().required(""),
  country: yup.string().required(""),
  parentName: yup.string().required(""),
  tiktokId: yup.string().required(""),
  clipLink: yup.string().required(""),
  // validationVideo: yup.string().required(""),
  dob: yup.date().nullable().default(undefined),
  tAndC: yup.boolean().oneOf([true]).required(),
});
