import {apiSlice} from '../apiSlice'

export const verificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllVerification: builder.query({
      query: () => ({
        url: '/verification',
        method: 'GET',
      }),
      providesTags: ['getAllVerification'],
    }),
    deleteVerification: builder.mutation({
      query: (id) => ({
        url: `/verification/delete?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllVerification'],
    }),
    updateVerification: builder.mutation({
      query: ({id, status}) => ({
        url: `/verification/update`,
        method: 'PUT',
        body: {id, status},
      }),
      providesTags: ['getAllVerification'],
    }),
  }),
})

export const {
  useGetAllVerificationQuery,
  useDeleteVerificationMutation,
  useUpdateVerificationMutation,
} = verificationApi
