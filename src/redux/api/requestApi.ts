import { baseApi } from "../services/baseApi";
import { tagType } from "../tagType";

const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagType.request],
    }),
  }),
});
export const {useCreateRequestMutation}=requestApi
