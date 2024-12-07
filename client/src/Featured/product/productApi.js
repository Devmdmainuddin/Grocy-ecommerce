import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi', // Reducer path for the product API slice
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`, 
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem('accessToken')) || '';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['product'], // Tag type for cache management
  endpoints: (builder) => ({
    // GET: Fetch all products
    getProducts: builder.query({
      query: () => '/product',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'product', id })), // Tag each product
              { type: 'product', id: 'LIST' }, // Tag the product list
            ]
          : [{ type: 'product', id: 'LIST' }],
    }),

    // GET: Fetch a single product by ID
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'product', id }],
    }),

    // POST: Add a new product
    addProduct: builder.mutation({
      query: (productData) => ({
        url: '/product',
        method: 'POST',
        body: productData,
      }),
      invalidatesTags: [{ type: 'product', id: 'LIST' }], // Invalidate product list cache
    }),

    // PATCH: Update a product by ID
    updateProduct: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'product', id }], // Invalidate cache for the specific product
    }),

    // DELETE: Delete a product by ID
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'product', id }, { type: 'product', id: 'LIST' }], // Invalidate both the product and list cache
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
