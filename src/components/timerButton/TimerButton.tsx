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
import { rename, selectRowNames } from "../../store/slice/rowNameSlice";

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
    // if (isRunning) {
    //   start();
    // } else {
    //   stop();
    // }
    console.log(isRunning);
  }, [isRunning, start, stop]);

  const nameStyle: React.CSSProperties = { textAlign: "center" };
  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexFlow: "column",
    backgroundColor: "#3d3d3d",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div
      style={buttonContainerStyle}
      onClick={() => {
        dispatch(stopAll());
        if (!isRunning) {
          dispatch(startAt({ row: rowIndex, col: colIndex }));
        }
      }}
    >
      <input
        style={nameStyle}
        value={rowName}
        onChange={(ev) =>
          dispatch(rename({ index: rowIndex, name: ev.target.value }))
        }
      />
      {count}
    </div>
  );
}

export default TimerButton;
