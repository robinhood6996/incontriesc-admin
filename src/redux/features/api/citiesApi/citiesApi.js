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
        body: {...cityData},
      }),
      invalidatesTags: ['getAllCities'],
    }),
    editCity: builder.mutation({
      query: ({id, cityName, description}) => ({
        url: `/city/${id}`,
        method: 'PUT',
        body: {name: cityName, description},
      }),
      invalidatesTags: ['getAllCities'],
    }),
    createArea: builder.mutation({
      query: (cityData) => ({
        url: `/area`,
        method: 'POST',
        body: {...cityData},
      }),
      invalidatesTags: ['getAllArea'],
    }),
    getAllAreas: builder.query({
      query: () => ({
        url: '/area',
        method: 'GET',
      }),
      providesTags: ['getAllArea'],
    }),
    deleteSingleAra: builder.mutation({
      query: (id) => ({
        url: `/area/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllArea'],
    }),
    editArea: builder.mutation({
      query: ({id, name, description}) => ({
        url: `/area/${id}`,
        method: 'PUT',
        body: {name, description},
      }),
      invalidatesTags: ['getAllArea'],
    }),
  }),
})

export const {
  useGetAllCitiesQuery,
  useGetCitiesByCountryQuery,
  useLazyGetCitiesByCountryQuery,
  useDeleteSingleCityMutation,
  useCreateCityMutation,
  useEditCityMutation,
  useCreateAreaMutation,
  useGetAllAreasQuery,
  useDeleteSingleAraMutation,
  useEditAreaMutation,
} = citiesApi
