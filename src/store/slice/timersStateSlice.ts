import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface InitialState {
  isRunning: boolean[][];
}

export const timersStateSlice = createSlice({
  name: "timersState",
  initialState: {
    isRunning: [[]],
  } as InitialState,
  reducers: {
    addRow: (state) => {
      for (let colIdx = 0; colIdx < state.isRunning.length; colIdx++) {
        const col = [...state.isRunning[colIdx], false];
        state.isRunning[colIdx] = col;
      }
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.isRunning.forEach((row) => {
        row.splice(action.payload, 1);
      });
    },
    addCol: (state) => {
      const col = Array<boolean>(state.isRunning[0].length).fill(false);
      state.isRunning.push(col);
    },
    deleteCol: (state, action: PayloadAction<number>) => {
      state.isRunning.splice(action.payload, 1);
    },
    toggle: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.isRunning[col][row] = !state.isRunning[col][row];
    },
    startAt: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.isRunning[col][row] = true;
    },
    stopAll: (state) => {
      for (let colIdx = 0; colIdx < state.isRunning.length; colIdx++) {
        for (let rowIdx = 0; rowIdx < state.isRunning[0].length; rowIdx++) {
          state.isRunning[colIdx][rowIdx] = false;
        }
      }
    },
    setStates: (state, action: PayloadAction<boolean[][]>) => {
      state.isRunning = action.payload;
    },
  },
});

export const selectTimersIsRunning = (
  state: ReturnType<typeof store.getState>
) => state.timersState.isRunning;

export const {
  toggle,
  startAt,
  stopAll,
  addCol,
  addRow,
  deleteCol,
  deleteRow,
  setStates,
} = timersStateSlice.actions;
