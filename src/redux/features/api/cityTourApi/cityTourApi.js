import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const cityTourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCityTours: builder.query({
      query: () => ({
        url: '/city-tour',
        method: 'GET',
      }),
      providesTags: ['getAllCityTours'],
    }),
    myCityTours: builder.query({
      query: () => ({
        url: '/city-tour/my',
        method: 'GET',
      }),
      providesTags: ['myCityTours'],
    }),
    postCityTour: builder.mutation({
      query: (apiData) => ({
        url: '/city-tour',
        method: 'POST',
        body: apiData,
      }),
      invalidatesTags: ['getAllCityTours', 'myCityTours'],
    }),
    deleteSingleCityTour: builder.mutation({
      query: (id) => ({
        url: `/city-tour?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllCityTours', 'myCityTours'],
    }),
  }),
})

export const {
  useGetAllCityToursQuery,
  usePostCityTourMutation,
  useMyCityToursQuery,
  useDeleteSingleCityTourMutation,
} = cityTourApi
