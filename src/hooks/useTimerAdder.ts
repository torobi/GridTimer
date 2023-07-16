import { useDispatch } from "react-redux";
import { add as addColName } from "../store/slice/colNameSlice";
import {
  addCol as addColCount,
  addRow as addRowCount,
} from "../store/slice/timersCountSlice";
import {
  addCol as addColState,
  addRow as addRowState,
} from "../store/slice/timersStateSlice";
import { add as addRowName } from "../store/slice/rowNameSlice";

export function useColAdder() {
  const dispatch = useDispatch();

  const addCol = () => {
    dispatch(addColName());
    dispatch(addColCount());
    dispatch(addColState());
  };

  return addCol;
}

export function useRowAdder() {
  const dispatch = useDispatch();

  const addRow = () => {
    dispatch(addRowName());
    dispatch(addRowCount());
    dispatch(addRowState());
  };

  return addRow;
}
