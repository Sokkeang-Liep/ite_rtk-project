
import { ProductsResponse } from "@/lib/ProductFakeStoreType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1'
  }),

  endpoints: (builder) => ({
    //get all products
    getAllProducts: builder.query<ProductsResponse[], void>({
  query: () => "/products",
})
  }),
});

export const {
  useGetAllProductsQuery,
} = productApi;