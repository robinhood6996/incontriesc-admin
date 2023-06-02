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
    deleteSingleCity: builder.mutation({
      query: (id) => ({
        url: `/city/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllCities'],
    }),
    createCity: builder.mutation({
      query: (cityData) => ({
        url: `/city`,
        method: 'POST',
        body: {name: cityData?.name, country: cityData?.country},
      }),
      invalidatesTags: ['getAllCities'],
    }),
  }),
})

export const {
  useGetAllCitiesQuery,
  useGetCitiesByCountryQuery,
  useDeleteSingleCityMutation,
  useCreateCityMutation,
} = citiesApi
