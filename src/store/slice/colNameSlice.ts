import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface InitialState {
  names: string[];
}

const DEFAULT_NAME = "timer";

export const colNameSlice = createSlice({
  name: "colName",
  initialState: {
    names: ["timer"],
  } as InitialState,
  reducers: {
    add: (state) => {
      state.names.push(DEFAULT_NAME);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.names.splice(action.payload, 1);
    },
    rename: (state, action: PayloadAction<{ index: number; name: string }>) => {
      state.names[action.payload.index] = action.payload.name;
    },
    setColNames: (state, action: PayloadAction<string[]>) => {
      state.names = action.payload;
    },
  },
});

export const selectColNames = (state: ReturnType<typeof store.getState>) =>
  state.colName.names;

export const { add, remove, rename, setColNames } = colNameSlice.actions;
