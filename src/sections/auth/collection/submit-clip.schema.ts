import * as yup from "yup";

export interface IClipForm {
  clipVideo?: any;
  clipUrl?: string;
  title: string;
  description?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  tiktokUsername?: string;
  instagramUserName?: string;
  ownRights?: boolean;
  olderthanEighteen?: boolean;
  splitSubmissionTerms?: boolean;
  paySubmissionTerms?: boolean;
  signature?: string;
}

export const SubmitClipInitialValue = {
  clipVideo: null,
  clipUrl: "",
  title: "",
  description: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: 0,
  tiktokUsername: "",
  instagramUserName: "",
  ownRights: false,
  olderthanEighteen: false,
  splitSubmissionTerms: false,
  paySubmissionTerms: false,
  signature: "",
};
export const submitClipSchema = yup.object().shape({
  title: yup.string().required(""),
  firstName: yup.string().required(""),
  lastName: yup.string().required(""),
  email: yup.string().email().required(""),
  phone: yup.number().required(""),
});
