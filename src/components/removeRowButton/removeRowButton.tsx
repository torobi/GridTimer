import { useSelector } from "react-redux";
import { useRowRemover } from "../../hooks/useTimerRemover";
import { selectRowNames } from "../../store/slice/rowNameSlice";

interface RemoveRowButtonProps {
  rowIndex: number;
}

function RemoveColButton({ rowIndex }: RemoveRowButtonProps) {
  const removeRow = useRowRemover();
  const rowNames = useSelector(selectRowNames);

  const buttonStyle: React.CSSProperties = {
    width: "50px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        if (rowNames.length > 1) {
          removeRow(rowIndex);
        }
      }}
    >
      -
    </button>
  );
}

export default RemoveColButton;
