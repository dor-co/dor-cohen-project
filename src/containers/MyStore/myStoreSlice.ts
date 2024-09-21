import { createSlice } from "@reduxjs/toolkit";
import { IMyStoreState } from "../../common/types";

const initialState: IMyStoreState = {
  title: "My Store ",
};

const myStoreSlice = createSlice({
  name: "MyStore",
  initialState,
  reducers: {},
});

export const {} = myStoreSlice.actions;

export default myStoreSlice.reducer;
