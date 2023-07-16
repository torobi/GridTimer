import { useSelector } from "react-redux";
import { selectColNames } from "../../store/slice/colNameSlice";
import Timer from "../timer/Timer";

function TimerList() {
  const colNames = useSelector(selectColNames);

  const hContainer: React.CSSProperties = {
    display: "flex",
  };

  return (
    <div style={hContainer}>
      {colNames.map((colName, colIndex) => {
        return <Timer key={colIndex} {...{ colName, colIndex }} />;
      })}
    </div>
  );
}

export default TimerList;
