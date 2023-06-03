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
      providesTags: ['getAllCountry'],
    }),
    // getSingleCountry: builder.query({
    //   query: () => ({
    //     url: '/country',
    //     method: 'GET',
    //   }),
    //   providesTags: ['getAllCountry'],
    // }),
    deleteSingleCountry: builder.mutation({
      query: (id) => ({
        url: `/country/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllCountry'],
    }),
    createCountry: builder.mutation({
      query: (countryName) => ({
        url: `/country`,
        method: 'POST',
        body: {name: countryName},
      }),
      invalidatesTags: ['getAllCountry'],
    }),
    editCountry: builder.mutation({
      query: ({id, countryName}) => ({
        url: `/country/${id}`,
        method: 'PUT',
        body: {name: countryName},
      }),
      invalidatesTags: ['getAllCountry'],
    }),
  }),
})

export const {
  useGetAllCountryQuery,
  useDeleteSingleCountryMutation,
  useCreateCountryMutation,
  useEditCountryMutation,
} = countryApi
