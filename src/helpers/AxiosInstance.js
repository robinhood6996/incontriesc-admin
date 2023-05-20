import axios from 'axios'
import {useSelector} from 'react-redux'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
  // headers: { 'X-Custom-Header': 'foobar' }
})

let isRefreshing = false
let failedQueue = []

const onErrorResponse = (error) => {
  return Promise.reject(error)
}

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const newConfig = config
    let auth = localStorage.getItem('authUser')
    let authUser = JSON.parse(auth)
    const token = authUser.access_token
    if (token) newConfig.headers.Authorization = `Bearer ${token}`
    newConfig.headers['Accept-Language'] = 'fa'
    return newConfig
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, onErrorResponse)

export default instance
