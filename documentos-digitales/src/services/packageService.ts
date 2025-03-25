import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const packagesApi = createApi({
  reducerPath: "packagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67e1c46558cc6bf7852705e2.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => "/package-list",
    }),
  }),
});

export const { useGetPackagesQuery } = packagesApi;
