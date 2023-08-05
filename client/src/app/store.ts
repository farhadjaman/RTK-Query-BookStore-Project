import { configureStore } from '@reduxjs/toolkit';
import { apiReducer, apiMiddleware, apiReducerPath } from './api/apiSlice';
export const store = configureStore({
  reducer: {
    [apiReducerPath]: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
