import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "../../types";

const initialState: IHomeState = {
  title: "home page",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
