import { ENDPOINTS } from "../config/endpoints";
import { baseAPI } from "./base-api";
export const creatorAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    creatorProfileSubmit: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.creatorProfileSubmission,
        method: "POST",
        body: credentials,
      }),
    }),
    getCreatorProfiles: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getCreatorProfile}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    creatorPageSubmit: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.postCreatorPage,
        method: "POST",
        body: credentials,
      }),
    }),
    getCreatorPage: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getCreatorPage}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    creatorClipSubmit: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.postCreatorClip,
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["clipList"],
    }),
    getCreatorClip: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getCreatorClip}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["clipList"],
    }),
  }),
});
export const {
  useCreatorProfileSubmitMutation,
  useGetCreatorProfilesQuery,
  useCreatorPageSubmitMutation,
  useGetCreatorPageQuery,
  useCreatorClipSubmitMutation,
  useGetCreatorClipQuery,
} = creatorAPi;
