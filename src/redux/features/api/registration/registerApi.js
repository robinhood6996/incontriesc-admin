import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const registerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (registerData) => ({
        url: '/auth/register',
        method: 'POST',
        body: registerData,
      }),
      // providesTags: ['getcountries'],
    }),
  }),
})

export const {useUserRegistrationMutation} = registerApi
