import { useSelector } from "react-redux";
import { useColRemover } from "../../hooks/useTimerRemover";
import { selectColNames } from "../../store/slice/colNameSlice";

interface RemoveColButtonProps {
  colIndex: number;
}

function RemoveColButton({ colIndex }: RemoveColButtonProps) {
  const removeCol = useColRemover();
  const colNames = useSelector(selectColNames);

  const buttonStyle: React.CSSProperties = {
    width: "50px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        if (colNames.length > 1) {
          removeCol(colIndex);
        }
      }}
    >
      -
    </button>
  );
}

export default RemoveColButton;
