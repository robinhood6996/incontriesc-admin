import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const bannerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => ({
        url: '/banner',
        method: 'GET',
      }),
      providesTags: ['getAllBanners'],
    }),
  }),
})

export const {useGetAllBannersQuery} = bannerApi
