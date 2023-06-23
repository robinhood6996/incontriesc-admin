import {createSlice} from '@reduxjs/toolkit'
import {userLoggedOut} from './authSlice'

const initialState = {
  setLogout: false,
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setShouldLogout: (state, action) => {
      userLoggedOut()
      state.setLogout = true
      return state
    },
  },
})

export const {setShouldLogout} = configSlice.actions

export default configSlice.reducer
