import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isRunning: boolean[][];
}

export const timersStateSlice = createSlice({
  name: "timersState",
  initialState: {
    isRunning: [],
  } as InitialState,
  reducers: {
    addRow: (state) => {
      state.isRunning.forEach((row) => {
        row.push(false);
      });
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.isRunning.forEach((row) => {
        row.splice(action.payload, 1);
      });
    },
    addCol: (state) => {
      const col = Array<boolean>(state.isRunning.length).fill(false);
      state.isRunning.push(col);
    },
    deleteCel: (state, action: PayloadAction<number>) => {
      state.isRunning.splice(action.payload, 1);
    },
    toggle: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.isRunning[col][row] = !state.isRunning[col][row];
    },
    stopAll: (state) => {
      const col = Array<boolean>(state.isRunning.length).fill(false);
      for (let colIdx = 0; colIdx < state.isRunning.length; colIdx++) {
        state.isRunning[colIdx] = [...col];
      }
    },
  },
});
