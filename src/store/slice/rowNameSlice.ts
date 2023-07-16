import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    delete: (state, action: PayloadAction<number>) => {
      state.names.splice(action.payload, 1);
    },
    rename: (state, action: PayloadAction<{ index: number; name: string }>) => {
      state.names[action.payload.index] = action.payload.name;
    },
  },
});
