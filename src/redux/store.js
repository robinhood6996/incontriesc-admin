import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import {apiSlice} from './features/api/apiSlice'
import {setupListeners} from '@reduxjs/toolkit/query'
import authReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    adminUser: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
  devTools: process.env.SITE_MOOD !== 'production',
})

setupListeners(store.dispatch)
