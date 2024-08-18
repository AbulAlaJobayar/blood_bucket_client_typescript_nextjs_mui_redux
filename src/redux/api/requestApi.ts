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
    getMyRequest:build.query({
     query:()=>({
      url: "/my-request",
      method: "GET",
     }),
     providesTags: [tagType.request]
    }),
    requestToMe:build.query({
     query:()=>({
      url: "/donation-request",
      method: "GET",
     }),
     providesTags: [tagType.request]
    }),
    updateRequestStates:build.mutation({
     query:({id,status})=>({
      url: `/donation-request/${id}`,
      method: "PUT",
      data:{status}
     }),
     invalidatesTags: [tagType.request,tagType.donor]
    })
  }),
});
export const {useCreateRequestMutation,useGetMyRequestQuery,useRequestToMeQuery,useUpdateRequestStatesMutation}=requestApi
