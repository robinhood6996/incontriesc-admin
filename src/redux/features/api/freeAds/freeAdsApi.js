import {objectToParam} from '../../../../helpers/objectParamsConversion'
import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const freeAdsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFreeAds: builder.query({
      query: (searchQuery) => ({
        url: `/freead?${objectToParam(searchQuery)}`,
        method: 'GET',
      }),
      providesTags: ['getAllFreeAds'],
    }),
    getAllInactiveFreeAds: builder.query({
      query: () => ({
        url: `/freead/inactive`,
        method: 'GET',
      }),
      providesTags: ['getAllInactiveAd'],
    }),
    myFreeAds: builder.query({
      query: () => ({
        url: `/freead/my`,
        method: 'GET',
      }),
      providesTags: ['myFreeAds'],
    }),
    getSingleFreeAds: builder.query({
      query: (adId) => ({
        url: `/freead/${adId}`,
        method: 'GET',
      }),
      invalidatesTags: ['getSingleFreeAds'],
    }),
    deleteSingleFreeAds: builder.mutation({
      query: (adId) => ({
        url: `/freead/${adId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllFreeAds'],
    }),
    createFreeAd: builder.mutation({
      query: (apiData) => ({
        url: `/freead/create`,
        method: 'POST',
        body: apiData,
      }),
      invalidatesTags: ['getSingleFreeAds', 'getAllFreeAds'],
    }),
    editFreeAd: builder.mutation({
      query: ({id, status}) => ({
        url: `/freead/update/${id}`,
        method: 'PUT',
        body: {status},
      }),
      invalidatesTags: ['getAllFreeAds', 'getAllInactiveAd'],
    }),
  }),
})

export const {
  useGetAllFreeAdsQuery,
  useGetSingleFreeAdsQuery,
  useCreateFreeAdMutation,
  useDeleteSingleFreeAdsMutation,
  useMyFreeAdsQuery,
  useGetAllInactiveFreeAdsQuery,
  useEditFreeAdMutation,
} = freeAdsApi
