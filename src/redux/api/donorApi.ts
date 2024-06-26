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
    getAllUsers: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
       
      }),
      providesTags: [tagType.donor],
    }),
    getSingleDonor: build.query({
      query: (id:string) => ({
        url: `/donor/${id}`,
        method: "GET",
       
      }),
      providesTags: [tagType.donor],
    }),
  }),
});
export const { useGetDonorQuery,useGetSingleDonorQuery ,useGetAllUsersQuery} = donorApi;
