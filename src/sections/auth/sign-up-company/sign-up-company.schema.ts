import * as yup from "yup";

export interface ISignUpCreator {
  name?: string;
  email?: string;
  password?: string;
  representative?: string;
  phone?: string;
  needs?: string;
  budget?: number;
  webLink: string;
  socialLink: string;
}

export const signUpCreatorInitialValue = {
  name: "",
  email: "",
  password: "",
  representative: "",
  phone: "",
  needs: "",
  budget: null,
  webLink: "",
  socialLink: "",
};
export const signUpCreatorSchema = yup.object().shape({
  name: yup.string().required(""),
  password: yup.string().required(""),
  representative: yup.string().required(""),
  phone: yup.string().required(""),
  email: yup.string().email().required(""),
  needs: yup.string().required(""),
  budget: yup.number().required(""),
  webLink: yup.string().required(""),
  socialLink: yup.string().required(""),
});
