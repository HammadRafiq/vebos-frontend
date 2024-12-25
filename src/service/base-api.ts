// RTK Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Store + configuration
import { TAGS } from "./tags";
import { environment } from "../config";
import { RootState } from "../redux";

// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: environment.apiKey,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["campaignList", "clipList"],
  endpoints: () => ({}),
});
