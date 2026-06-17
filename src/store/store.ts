


import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "@/features/countSlice/countSlice";
import { cartSlice } from "@/features/countSlice/cartSlice";
import { productApi } from "@/service/productFakeStore";
// set up the store
export const makeStore = () =>
  configureStore({
    reducer: {
      count: countSlice.reducer,
      cart: cartSlice.reducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];