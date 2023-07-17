import { useDispatch, useSelector } from "react-redux";

import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { selectColNames, setColNames } from "../store/slice/colNameSlice";
import { selectRowNames, setRowNames } from "../store/slice/rowNameSlice";
import { setStates } from "../store/slice/timersStateSlice";
import { setCounts } from "../store/slice/timersCountSlice";

export function useCookieLoad() {
  const dispatch = useDispatch();
  const colNames = useSelector(selectColNames);
  const rowNames = useSelector(selectRowNames);

  const [cookies, setCookie] = useCookies([
    "colNames",
    "rowNames",
    "timersState",
    "timersCount",
  ]);
  useEffect(() => {
    const colNames = (cookies.colNames as string[]) ?? ["timer"];
    const rowNames = (cookies.rowNames as string[]) ?? ["detail"];

    const states: boolean[][] = new Array<boolean[]>(colNames.length);
    const counts: number[][] = new Array<number[]>(colNames.length);
    for (let colIdx = 0; colIdx < states.length; colIdx++) {
      states[colIdx] = new Array<boolean>(rowNames.length).fill(false);
      counts[colIdx] = new Array<number>(rowNames.length).fill(0);
    }

    dispatch(setColNames(colNames));
    dispatch(setRowNames(rowNames));
    dispatch(setStates(states));
    dispatch(setCounts(counts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCookie("colNames", colNames);
    setCookie("rowNames", rowNames);
  }, [setCookie, colNames, rowNames]);
}
