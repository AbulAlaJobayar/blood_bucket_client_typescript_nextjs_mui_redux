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
        url: "/my-profile",
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagType.auth],
    }),
    updateByAdmin: build.mutation({
      query: ({ id, status }) => ({
        url: `/updateRole/${id}`,
        method: "PUT",
        data: status,
      }),
      invalidatesTags: [tagType.auth, tagType.donor, tagType.request],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/changePassword",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagType.auth],
    }),
  }),
});
export const {
  useGetMeQuery,
  useUpdateByMeMutation,
  useChangePasswordMutation,
  useUpdateByAdminMutation,
} = authApi;
