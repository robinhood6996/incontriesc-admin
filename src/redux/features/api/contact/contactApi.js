import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postContactDetails: builder.mutation({
      query: (apiData) => ({
        url: '/escort/contact',
        method: 'PUT',
        body: apiData,
      }),
    }),
  }),
})

export const {usePostContactDetailsMutation} = contactApi
