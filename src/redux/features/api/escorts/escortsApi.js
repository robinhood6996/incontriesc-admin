import {objectToParam} from '../../../../helpers/objectParamsConversion'
import {apiSlice} from '../apiSlice'
// import {setAvailableCountries} from '../globalSearch'
// import {setIsLoggedOut, userLoggedIn, userLoggedOut} from './authSlice'

export const escortsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEscorts: builder.query({
      query: (searchQuery) => ({
        url: `/escort/get-all?${objectToParam(searchQuery)}`,
        method: 'GET',
      }),
      providesTags: ['getAllEscorts'],
    }),
    getInactiveEscorts: builder.query({
      query: (searchQuery) => ({
        url: `/escort/get-inactive`,
        method: 'GET',
      }),
      providesTags: ['getInactiveEscorts'],
    }),

    getEscortsByCategory: builder.query({
      query: (searchQuery) => ({
        url: `/escort/get-all?${objectToParam(searchQuery)}`,
        method: 'GET',
      }),
      providesTags: ['getEscortsByCategory'],
    }),

    getSingleEscortDetails: builder.query({
      query: (username) => ({
        url: `/escort?username=${username}`,
        method: 'GET',
      }),
      providesTags: ['getSingleEscortDetails'],
    }),
    getSingleEscortDetailsByEmail: builder.query({
      query: (email) => ({
        url: `/escort?email=${email}`,
        method: 'GET',
      }),
      providesTags: ['getSingleEscortDetailsByEmail'],
    }),
    deleteSingleEscort: builder.mutation({
      query: (username) => ({
        url: `/escort/delete?username=${username}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllEscorts'],
    }),
    getEscortProfile: builder.query({
      query: () => ({
        url: `/escort/profile`,
        method: 'GET',
      }),
      providesTags: ['getEscortProfile'],
    }),
    uploadEscortPhoto: builder.mutation({
      query: (imageData) => ({
        url: '/escort/upload-file',
        method: 'POST',
        body: imageData,
      }),
      providesTags: ['uploadEscortPhoto'],
      invalidatesTags: ['getEscortProfile'],
    }),
    filterEscorts: builder.query({
      query: (searchQuery) => ({
        url: `/escort/filter?${objectToParam(searchQuery)}`,
        method: 'GET',
      }),
      providesTags: ['filterEscorts'],
    }),
    updateBio: builder.mutation({
      query: (bioData) => ({
        url: `/escort/update-bio`,
        method: 'PUT',
        body: bioData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    updatePhysicalData: builder.mutation({
      query: (physicalData) => ({
        url: `/escort/update-physical`,
        method: 'PUT',
        body: physicalData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    updateAboutMeData: builder.mutation({
      query: (aboutMeData) => ({
        url: `/escort/update-additional-data`,
        method: 'PUT',
        body: aboutMeData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    updateWorkingCitiesData: builder.mutation({
      query: (workingCitiesData) => ({
        url: `/escort/working-cities`,
        method: 'PUT',
        body: workingCitiesData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    updateServicesData: builder.mutation({
      query: (servicesData) => ({
        url: `/escort/services`,
        method: 'PUT',
        body: servicesData,
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    updateEscortStatusData: builder.mutation({
      query: (status) => ({
        url: `/escort/update-status`,
        method: 'PUT',
        body: status,
      }),
      invalidatesTags: ['getEscortProfile', 'getAllEscorts', 'getInactiveEscorts'],
    }),
    deleteEscortImage: builder.mutation({
      query: (fileName) => ({
        url: `/escort/upload?filename=${fileName}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    deleteEscortVideo: builder.mutation({
      query: (fileName) => ({
        url: `/escort/upload/videos?filename=${fileName}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getEscortProfile'],
    }),
    getFeaturedEscorts: builder.query({
      query: () => ({
        url: '/escort-ad/featured',
        method: 'GET',
      }),
      providesTags: ['getFeaturedEscorts'],
    }),
  }),
})

export const {
  useGetAllEscortsQuery,
  useUploadEscortPhotoMutation,
  useGetSingleEscortDetailsQuery,
  useGetEscortProfileQuery,
  useGetEscortsByCategoryQuery,
  useFilterEscortsQuery,
  useUpdateBioMutation,
  useUpdatePhysicalDataMutation,
  useUpdateAboutMeDataMutation,
  useUpdateWorkingCitiesDataMutation,
  useUpdateServicesDataMutation,
  useDeleteEscortImageMutation,
  useDeleteEscortVideoMutation,
  useDeleteSingleEscortMutation,
  useUpdateEscortStatusDataMutation,
  useGetInactiveEscortsQuery,
  useGetSingleEscortDetailsByEmailQuery,
  useGetFeaturedEscortsQuery,
} = escortsApi
