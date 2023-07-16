import { useSelector } from "react-redux";
import { selectColNames } from "../../store/slice/colNameSlice";
import Timer from "../timer/Timer";

function TimerList() {
  const colNames = useSelector(selectColNames);

  return (
    <div>
      {colNames.map((colName, colIndex) => {
        return <Timer key={colIndex} {...{ colName, colIndex }} />;
      })}
    </div>
  );
}

export default TimerList;
