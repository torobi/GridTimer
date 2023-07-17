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
import { css } from "@emotion/react";

interface TimerButtonProps {
  colIndex: number;
  rowIndex: number;
}

function secToHMS(seconds: number): string {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  let hh;
  // hour が3桁以上の場合は左0埋めをしない
  if (hour < 100) {
    hh = `00${hour}`.slice(-2);
  } else {
    hh = hour;
  }
  const mm = `00${min}`.slice(-2);
  const ss = `00${sec}`.slice(-2);
  let time = "";
  if (hour !== 0) {
    time = `${hh}:${mm}:${ss}`;
  } else {
    time = `${mm}:${ss}`;
  }
  return time;
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
    return () => {
      stop();
    };
  }, [isRunning, start, stop]);

  const textColor = isRunning ? "#0a1b0e" : "#ffffff";

  const Style = {
    name: css`
      margin: 10px;

      padding: 0;
      background: none;
      border: none;
      border-radius: 0;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      border-bottom: 1px solid ${textColor};
      color: ${textColor};

      text-align: center;
    `,
    buttonContainer: css`
      display: flex;
      flex-flow: column;
      background-color: ${isRunning ? "#47b45d" : "#3d3d3d"};
      color: ${textColor};
      border-radius: 10px;

      grid-row: ${rowIndex + 2};
      grid-column: ${colIndex + 1};

      font-weight: 600;
    `,
    time: css``,
  };

  return (
    <div
      css={Style.buttonContainer}
      onClick={() => {
        dispatch(stopAll());
        if (!isRunning) {
          dispatch(startAt({ row: rowIndex, col: colIndex }));
        }
      }}
    >
      <input
        css={Style.name}
        value={rowName}
        onChange={(ev) =>
          dispatch(rename({ index: rowIndex, name: ev.target.value }))
        }
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      />

      <div css={Style.time}>{secToHMS(count)}</div>
    </div>
  );
}

export default TimerButton;
