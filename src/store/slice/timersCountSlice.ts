import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface InitialState {
  count: number[][];
}

export const timersCountSlice = createSlice({
  name: "timersCount",
  initialState: {
    count: [[]],
  } as InitialState,
  reducers: {
    addRow: (state) => {
      state.count.forEach((row) => {
        row.push(0);
      });
      for (let colIdx = 0; colIdx < state.count.length; colIdx++) {
        const col = [...state.count[colIdx], 0];
        state.count[colIdx] = col;
      }
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.count.forEach((row) => {
        row.splice(action.payload, 1);
      });
    },
    addCol: (state) => {
      const col = Array<number>(state.count[0].length).fill(0);
      state.count.push(col);
    },
    deleteCol: (state, action: PayloadAction<number>) => {
      state.count.splice(action.payload, 1);
    },
    resetAll: (state) => {
      const col = Array<number>(state.count.length).fill(0);
      for (let colIdx = 0; colIdx < state.count.length; colIdx++) {
        state.count[colIdx] = [...col];
      }
    },
    increase: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.count[col][row]++;
    },
    setCounts: (state, action: PayloadAction<number[][]>) => {
      state.count = action.payload;
    },
  },
});

export const selectTimersCount = (state: ReturnType<typeof store.getState>) =>
  state.timersCount.count;

export const { increase, addCol, addRow, deleteCol, deleteRow, setCounts } =
  timersCountSlice.actions;
