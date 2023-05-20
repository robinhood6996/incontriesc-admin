import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const citiesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: () => ({
        url: '/city',
        method: 'GET',
      }),
      providesTags: ['getAllCities'],
    }),
    getCitiesByCountry: builder.query({
      query: (countryName) => ({
        url: `/city/${countryName}`,
        method: 'GET',
      }),
      providesTags: ['getCitiesByCountry'],
    }),
  }),
})

export const {useGetAllCitiesQuery, useGetCitiesByCountryQuery} = citiesApi
