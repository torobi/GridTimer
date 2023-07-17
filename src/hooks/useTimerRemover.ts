import { useDispatch } from "react-redux";
import {
  deleteCol as deleteColCount,
  deleteRow as deleteRowCount,
} from "../store/slice/timersCountSlice";
import {
  deleteCol as deleteColState,
  deleteRow as deleteRowState,
} from "../store/slice/timersStateSlice";
import { remove as deleteRowName } from "../store/slice/rowNameSlice";
import { remove as deleteColName } from "../store/slice/colNameSlice";

export function useColRemover() {
  const dispatch = useDispatch();

  const removeCol = (index: number) => {
    dispatch(deleteColName(index));
    dispatch(deleteColCount(index));
    dispatch(deleteColState(index));
  };

  return removeCol;
}

export function useRowRemover() {
  const dispatch = useDispatch();

  const deleteRow = (index: number) => {
    dispatch(deleteRowName(index));
    dispatch(deleteRowCount(index));
    dispatch(deleteRowState(index));
  };

  return deleteRow;
}
