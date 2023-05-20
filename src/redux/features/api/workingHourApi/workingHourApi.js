import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const workingHourApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateWorkingHours: builder.mutation({
      query: (apiData) => ({
        url: '/escort/working-hours',
        method: 'PUT',
        body: apiData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
  }),
})

export const {useUpdateWorkingHoursMutation} = workingHourApi
