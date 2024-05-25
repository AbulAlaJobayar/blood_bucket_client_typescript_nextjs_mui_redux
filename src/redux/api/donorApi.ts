import { IMeta } from "@/types";
import { baseApi } from "../services/baseApi";
import { tagType } from "../tagType";

const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDonor: build.query({
      query: (args: Record<string, any>) => ({
       
        url: "/donor-list",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          donors: response,
          meta,
        };
      },
      providesTags: [tagType.donor],
    }),
  }),
});
export const { useGetDonorQuery } = donorApi;
