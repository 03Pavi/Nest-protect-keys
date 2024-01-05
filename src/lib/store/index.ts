import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/products/productSlice";

const reducer = combineReducers({
  productReducer,
});

export const store = () =>
  configureStore({
    reducer: { reducer },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
