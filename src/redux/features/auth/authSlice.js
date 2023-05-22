import {createSlice} from '@reduxjs/toolkit'

const adminUser = JSON.parse(localStorage.getItem('adminUser'))

const initialState = adminUser ?? false

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      localStorage.setItem('adminUser', JSON.stringify(action.payload))
      state = action.payload
      return state
    },
    userLoggedOut: (state) => {
      localStorage.removeItem('adminUser')
      state = false
      return state
    },
  },
})

export const {userLoggedIn, userLoggedOut} = authSlice.actions

export default authSlice.reducer
