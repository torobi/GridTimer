import { useDispatch, useSelector } from "react-redux";
import { rename } from "../../store/slice/colNameSlice";
import { selectRowNames } from "../../store/slice/rowNameSlice";
import TimerButton from "../timerButton/TimerButton";

interface TimerProps {
  colName: string;
  colIndex: number;
}

function Timer({ colName, colIndex }: TimerProps) {
  const dispatch = useDispatch();

  const rowNames = useSelector(selectRowNames);

  const nameStyle: React.CSSProperties = { textAlign: "center" };

  return (
    <>
      <input
        style={nameStyle}
        value={colName}
        onChange={(ev) =>
          dispatch(rename({ index: colIndex, name: ev.target.value }))
        }
      />

      <br />

      <div>
        {rowNames.map((_, rowIndex) => {
          return <TimerButton key={rowIndex} {...{ colIndex, rowIndex }} />;
        })}
      </div>
    </>
  );
}

export default Timer;
