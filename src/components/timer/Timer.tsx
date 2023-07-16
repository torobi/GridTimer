import { useDispatch } from "react-redux";
import { rename } from "../../store/slice/colNameSlice";

interface TimerProps {
  colName: string;
  colIndex: number;
}

function Timer({ colName, colIndex }: TimerProps) {
  const dispatch = useDispatch();

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

      <button>+</button>
    </>
  );
}

export default Timer;
