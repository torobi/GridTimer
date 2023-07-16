import { useDispatch } from "react-redux";
import { add as addName } from "../store/slice/colNameSlice";
import { addCol as addCount } from "../store/slice/timersCountSlice";
import { addCol as addState } from "../store/slice/timersStateSlice";

export function useColAdder() {
  const dispatch = useDispatch();

  const addCol = () => {
    dispatch(addName());
    dispatch(addCount());
    dispatch(addState());
  };

  return addCol;
}
