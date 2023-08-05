// Path: client\src\app\store.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from '../../shared/config/types';
export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Books'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getBooks: builder.query<[Book], void>({
      query: () => ({
        url: '/books',
        method: 'GET',
      }),
      providesTags: ['Books'],
    }),
    getBook: builder.query<Book, number>({
      query: (id) => ({
        url: '/books/' + id,
        method: 'GET',
      }),
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (body) => ({
        url: '/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
    }),
    editBook: builder.mutation<Book, Partial<Book>>({
      query: (body) => {
        return {
          url: '/books/' + body.id,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation<void, number>({
      query: (id) => ({
        url: '/books/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

const apiReducer = apiSlice.reducer;
const apiMiddleware = apiSlice.middleware;
const apiReducerPath = apiSlice.reducerPath;

export { apiReducer, apiMiddleware, apiReducerPath };
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useEditBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
} = apiSlice;
