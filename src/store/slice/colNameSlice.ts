import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  names: string[];
}

const DEFAULT_NAME = "timer";

export const colNameSlice = createSlice({
  name: "colName",
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
  },
});

export const selectColNames = (
  state: ReturnType<typeof colNameSlice.reducer>
) => state.names;

export const { add, remove, rename } = colNameSlice.actions;
