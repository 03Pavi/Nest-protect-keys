import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: any[]; // Replace 'any' with the actual type of your products
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    },
    deleteProducts: (state) => {
      state.products = [];
    },
  },
});

export const { addProducts, deleteProducts } = productSlice.actions;
export default productSlice.reducer;
