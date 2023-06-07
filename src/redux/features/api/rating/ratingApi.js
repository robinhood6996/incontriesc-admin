import {objectToParam} from '../../../../helpers/objectParamsConversion'
import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const ratingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRatings: builder.query({
      query: (searchQuery) => ({
        url: `/rating`,
        method: 'GET',
      }),
      providesTags: ['getAllRatings'],
    }),
  }),
})

export const {useGetAllRatingsQuery} = ratingApi
