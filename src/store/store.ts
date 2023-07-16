import { configureStore } from "@reduxjs/toolkit";
import { rowNameSlice } from "./slice/rowNameSlice";
import { timersStateSlice } from "./slice/timersStateSlice";
import { colNameSlice } from "./slice/colNameSlice";

const store = configureStore({
  reducer: {
    rowName: rowNameSlice.reducer,
    colName: colNameSlice.reducer,
    timersState: timersStateSlice.reducer,
  },
});

export default store;
