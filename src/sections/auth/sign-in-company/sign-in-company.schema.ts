import * as yup from "yup";

export interface ISignInCreator {
  email: string;
  password: string;

}

export const signInCreatorInitialValue = {
  email: "",
  password: "",
};
export const signInCreatorSchema = yup.object().shape({
  email: yup.string().email().required(""),
  password: yup.string().required(""),
});
