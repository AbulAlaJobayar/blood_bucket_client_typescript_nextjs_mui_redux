import { baseApi } from "../services/baseApi";
import { tagType } from "../tagType";

const authApi = baseApi.injectEndpoints({
        endpoints: (build) => ({
          getMe: build.query({
            query: () => ({
              url: "/my-profile",
              method: "GET",
             
            }),
            providesTags: [tagType.auth],
          }),
          updateByMe: build.mutation({
            query: (data) => ({
              url: '/my-profile',
              method: "PUT",
              data
             
            }),
            invalidatesTags: [tagType.auth],
          }),
          changePassword: build.mutation({
            query: (data) => ({
              url: '/changePassword',
              method: "POST",
              data
             
            }),
            invalidatesTags: [tagType.auth],
          }),
        }),
      });
      export const { useGetMeQuery,useUpdateByMeMutation,useChangePasswordMutation} = authApi;