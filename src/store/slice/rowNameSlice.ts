import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface InitialState {
  names: string[];
}

const DEFAULT_NAME = "detail";

export const rowNameSlice = createSlice({
  name: "rowName",
  initialState: {
    names: [],
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
    setRowNames: (state, action: PayloadAction<string[]>) => {
      state.names = action.payload;
    },
  },
});

export const selectRowNames = (state: ReturnType<typeof store.getState>) =>
  state.rowName.names;

export const { add, remove, rename, setRowNames } = rowNameSlice.actions;
