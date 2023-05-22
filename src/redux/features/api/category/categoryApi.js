import {apiSlice} from '../apiSlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: '/category',
        method: 'GET',
      }),
      providesTags: ['getAllCategory'],
    }),
    createCategory: builder.mutation({
      query: (apiData) => ({
        url: '/category',
        method: 'POST',
        body: apiData,
      }),
      invalidatesTags: ['getAllCategory'],
    }),
    updateCategory: builder.mutation({
      query: ({id, nameData}) => ({
        url: `/category/${id}`,
        method: 'PUT',
        body: nameData,
      }),
      invalidatesTags: ['getAllCategory'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllCategory'],
    }),
    getBDSMSearch: builder.query({
      query: () => ({
        url: '/escort/search-query',
        method: 'GET',
      }),
      providesTags: ['getBDSMSearch'],
    }),
  }),
})

export const {
  useGetAllCategoryQuery,
  useGetBDSMSearchQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi
