import { configureStore } from "@reduxjs/toolkit";
import { rowNameSlice } from "./slice/rowNameSlice";
import { timersStateSlice } from "./slice/timersStateSlice";

const store = configureStore({
  reducer: {
    rowName: rowNameSlice.reducer,
    timersState: timersStateSlice.reducer,
  },
});

export default store;
