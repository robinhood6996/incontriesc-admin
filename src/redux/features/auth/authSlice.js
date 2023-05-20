import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  access_token: undefined,
  user: undefined,
  isLoggedOut: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
      state.user = action.payload.user
      state.isLoggedOut = false
    },
    userLoggedOut: (state, action) => {
      console.log('logout r')
      localStorage.removeItem('authUser')
      state.access_token = undefined
      state.refresh_token = undefined
      state.user = undefined
    },
  },
})

export const {userLoggedIn, userLoggedOut} = authSlice.actions

export default authSlice.reducer
