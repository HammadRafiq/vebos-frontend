import * as yup from "yup";

export interface ICreatorClipForm {
  title: string;
  niche: string;
  estRevenue: any | null;
  video: null | any;
}

export const CreaterSubmitClipInitialValue = {
  video: null,
  niche: "",
  title: "",
  estRevenue: null,
};
export const submitCreatorClipSchema = yup.object().shape({
  title: yup.string().required(""),
  niche: yup.string().required(""),
  estRevenue: yup
    .number()
    .required("Revenue is required")
    .min(0, "Revenue must not be negative")
    .nullable(""),
});
