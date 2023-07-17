import { useSelector } from "react-redux";
import { useRowRemover } from "../../hooks/useTimerRemover";
import { selectRowNames } from "../../store/slice/rowNameSlice";
import { css } from "@emotion/react";

interface RemoveRowButtonProps {
  rowIndex: number;
}

function RemoveColButton({ rowIndex }: RemoveRowButtonProps) {
  const removeRow = useRowRemover();
  const rowNames = useSelector(selectRowNames);

  const buttonStyle = css`
    grid-row: ${rowIndex + 2};
    grid-column: -3;
    user-select: none;
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
