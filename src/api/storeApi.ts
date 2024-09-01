import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Item } from '../types'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Item[], string>({
      query: () => ``,
    }),
    getProductByID: builder.query<Item, string>({
      query: (id) => `/${id}`,
    }),
    getProductsByCategory: builder.query<Item[], string>({
      query: (cat) => `/category/${cat}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIDQuery, useGetProductsByCategoryQuery } = storeApi