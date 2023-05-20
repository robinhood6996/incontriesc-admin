import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const countryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountry: builder.query({
      query: () => ({
        url: '/country',
        method: 'GET',
      }),
      providesTags: ['getcountries'],
    }),

  }),
})

export const {useGetAllCountryQuery } = countryApi
