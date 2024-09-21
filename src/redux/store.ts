import { configureStore } from "@reduxjs/toolkit";
import myStoreSlice from "../containers/MyStore/myStoreSlice";

const store = configureStore({
  reducer: {
    myStore: myStoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
