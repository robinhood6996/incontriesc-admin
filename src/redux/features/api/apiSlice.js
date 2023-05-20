import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_CUSTOM_BASE_URL,
  prepareHeaders: (headers, {getState, endpoint, extra}) => {
    if (endpoint !== 'login') {
      let auth = localStorage.getItem('authUser')
      let authUser = JSON.parse(auth)
      // let storeUserToken = getState().auth.access_token
      let storeUserToken = authUser?.token
      if (storeUserToken) {
        headers.set('Authorization', `Bearer ${storeUserToken}`)
      }
    }

    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.data) {
    } else if (result?.error) {
      console.log('error=> apislice', result.error, extraOptions)
      if (result.error.status === 401) {
        console.log('401')
        // api.dispatch(setIsLoggedOut(true))
      }
    }
    return result
  },
  // baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({}),
})
export const {} = apiSlice
