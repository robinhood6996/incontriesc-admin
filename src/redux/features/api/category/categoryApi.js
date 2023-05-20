import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
      providesTags: ['getAllCategory'],
    }),
    getBDSMSearch: builder.query({
      query: () => ({
        url: '/escort/search-query',
        method: 'GET',
      }),
      providesTags: ['getBDSMSearch'],
    }),
  }),
})

export const {useGetAllCategoryQuery, useGetBDSMSearchQuery} = categoryApi
