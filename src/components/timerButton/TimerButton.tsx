import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTimersIsRunning,
  startAt,
  stopAll,
} from "../../store/slice/timersStateSlice";
import {
  increase,
  selectTimersCount,
} from "../../store/slice/timersCountSlice";
import { selectRowNames } from "../../store/slice/rowNameSlice";

interface TimerButtonProps {
  colIndex: number;
  rowIndex: number;
}

function TimerButton({ colIndex, rowIndex }: TimerButtonProps) {
  const dispatch = useDispatch();

  const timersCount = useSelector(selectTimersCount);
  const count = timersCount[colIndex][rowIndex];

  const rowNames = useSelector(selectRowNames);
  const rowName = rowNames[rowIndex];

  const timersIsRunning = useSelector(selectTimersIsRunning);
  const isRunning = timersIsRunning[colIndex][rowIndex];

  const intervalRef = useRef<number | null>(null);
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      dispatch(increase({ row: rowIndex, col: colIndex }));
    }, 1000);
  }, [dispatch, colIndex, rowIndex]);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    if (isRunning) {
      start();
    } else {
      stop();
    }
  }, [isRunning, start, stop]);

  return (
    <div
      onClick={() => {
        dispatch(stopAll());
        dispatch(startAt({ row: rowIndex, col: colIndex }));
      }}
    >
      {rowName}
      {count}
    </div>
  );
}

export default TimerButton;
