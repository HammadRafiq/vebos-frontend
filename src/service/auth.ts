import { ENDPOINTS } from "../config/endpoints";
import { baseAPI } from "./base-api";
export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    brandLogin: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.brandSignIn,
        method: "POST",
        body: credentials,
      }),
    }),
    brandSignUp: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.brandSignUp,
        method: "POST",
        body: user,
      }),
    }),
    creatorLogin: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.creatorSignIn,
        method: "POST",
        body: credentials,
      }),
    }),
    creatorSignUp: builder.mutation({
      query: (user: any) => ({
        url: ENDPOINTS?.creatorSignUp,
        method: "POST",
        body: user,

      }),
    }),
  }),
});

export const {
  useBrandLoginMutation,
  useBrandSignUpMutation,
  useCreatorLoginMutation,
  useCreatorSignUpMutation,
} = authAPI;
