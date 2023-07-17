import { useSelector } from "react-redux";
import { useRowRemover } from "../../hooks/useTimerRemover";
import { selectRowNames } from "../../store/slice/rowNameSlice";
import { css } from "@emotion/react";

interface RemoveRowButtonProps {
  colIndex: number;
  rowIndex: number;
}

function RemoveColButton({ colIndex, rowIndex }: RemoveRowButtonProps) {
  const removeRow = useRowRemover();
  const rowNames = useSelector(selectRowNames);

  const buttonStyle = css`
    grid-row: ${rowIndex + 2};
    grid-column: -3;
  `;

  return (
    <button
      css={buttonStyle}
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
