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
  }),
})

export const {useGetAllVerificationQuery} = verificationApi
