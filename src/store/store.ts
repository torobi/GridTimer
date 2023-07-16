import { configureStore } from "@reduxjs/toolkit";
import { rowNameSlice } from "./slice/rowNameSlice";
import { timersStateSlice } from "./slice/timersStateSlice";
import { colNameSlice } from "./slice/colNameSlice";
import { timersCountSlice } from "./slice/timersCountSlice";

const store = configureStore({
  reducer: {
    rowName: rowNameSlice.reducer,
    colName: colNameSlice.reducer,
    timersState: timersStateSlice.reducer,
    timersCount: timersCountSlice.reducer,
  },
});

export default store;
