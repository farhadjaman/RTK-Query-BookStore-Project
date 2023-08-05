import { configureStore } from '@reduxjs/toolkit';
import { apiReducer, apiMiddleware, apiReducerPath } from './api/apiSlice';
import bookReducer from './reducers/bookReducer';
export const store = configureStore({
  reducer: {
    [apiReducerPath]: apiReducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
