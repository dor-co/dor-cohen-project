import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMyStoreState, IProductItem } from "../../common/types";

const initialState: IMyStoreState = {
  productsList: [],
  selectedProduct: null,
};

const myStoreSlice = createSlice({
  name: "MyStore",
  initialState,
  reducers: {
    setProductsList(state, action: PayloadAction<IProductItem[]>) {
      state.productsList = action.payload;
    },
    setSelectedProduct(state, action: PayloadAction<number | null>) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProductsList, setSelectedProduct } = myStoreSlice.actions;

export default myStoreSlice.reducer;
