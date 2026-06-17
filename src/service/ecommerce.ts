
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ecommerceApi= createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_ISHOP_BASE_URL}),
  endpoints: (builder)=>({
    // getAllProducts
     getAllProduct: builder.query({
      query: () => `/products`
     }),
     
  })
})

export const {
 useGetAllProductQuery
} = ecommerceApi;
