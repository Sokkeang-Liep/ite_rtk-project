import { ProductsResponse } from "@/lib/ProductFakeStoreType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),

  endpoints: (builder) => ({
    // Get all products

    getAllProducts: builder.query<ProductsResponse[], void>({

      query: () => "/products",

    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = productApi;