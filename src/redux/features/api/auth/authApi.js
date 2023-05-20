import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLoggedIn: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          let result = await queryFulfilled
          let data = {
            access_token: result.data.token,
            user: {...result.data.user},
          }
          // dispatch(userLoggedIn(data))
          // localStorage.setItem('authUser', JSON.stringify(data))
        } catch (err) {
          console.log('err', err)
        }
      },
      invalidatesTags: [],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `/auth/user`,
        method: 'GET'
      })
    })

    // userLoggedOut: builder.query({
    //   query: () => ({
    //     url: '/asiris_auth/auth/logout',
    //     method: 'GET',
    //   }),
    //   async onQueryStarted(arg, {dispatch, queryFulfilled}) {
    //     try {
    //       let result = await queryFulfilled
    //       if (result) {
    //         // dispatch(userLoggedOut())
    //         localStorage.removeItem('authUser')
    //       }
    //     } catch (err) {
    //       console.log('err: ', err)
    //       // dispatch(userLoggedOut())
    //       localStorage.removeItem('authUser')
    //     }
    //   },
    //   keepUnusedDataFor: 0,
    //   providesTags: [''],
    // }),
  }),
})

export const {useUserLoggedInMutation, useGetAllUserQuery } = authApi
