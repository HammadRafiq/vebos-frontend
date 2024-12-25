import { ENDPOINTS } from "../config/endpoints";
import { baseAPI } from "./base-api";
export const brandApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    brandBuyClip: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.postBrandClip,
        method: "POST",
        body: credentials,
      }),
    }),
    getBrandClip: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getBrandClip}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    postBrandCampaign: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.createBrandCampaign,
        method: "POST",
        body: credentials,
      }),
    }),
    getBrandCampaign: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getBrandCampaign}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["campaignList"],
    }),
    deleteBrandCampaign: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS?.deleteBrandCampaign}?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["campaignList"],
    }),
    updateBrandCampaign: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.updateBrandCampaign,
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["campaignList"],
    }),
    getSingleBrandCampaign: builder.mutation({
      query: (id) => ({
        url: `${ENDPOINTS?.getSingleBrandCampaign}?id=${id}`,
        method: "GET",
      }),
    }),
    postFullTimeCreate: builder.mutation({
      query: (credentials: any) => ({
        url: ENDPOINTS?.postBrandCreatorRequest,
        method: "POST",
        body: credentials,
      }),
    }),
    getFullTimeCreate: builder.query({
      query: ({ limit, page }) => ({
        url: `${ENDPOINTS?.getBrandCreatorRequest}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useBrandBuyClipMutation,
  useGetBrandClipQuery,
  usePostBrandCampaignMutation,
  useGetBrandCampaignQuery,
  useDeleteBrandCampaignMutation,
  useUpdateBrandCampaignMutation,
  useGetSingleBrandCampaignMutation,
  usePostFullTimeCreateMutation,
  useGetFullTimeCreateQuery,
} = brandApi;
