import { useSelector } from "react-redux";
import { useColRemover } from "../../hooks/useTimerRemover";
import { selectColNames } from "../../store/slice/colNameSlice";
import { css } from "@emotion/react";

interface RemoveColButtonProps {
  colIndex: number;
}

function RemoveColButton({ colIndex }: RemoveColButtonProps) {
  const removeCol = useColRemover();
  const colNames = useSelector(selectColNames);

  const buttonStyle = css`
    grid-row: -3;
    grid-column: ${colIndex + 1};
  `;

  return (
    <button
      css={buttonStyle}
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
