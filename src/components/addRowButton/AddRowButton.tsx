import { css } from "@emotion/react";
import { useRowAdder } from "../../hooks/useTimerAdder";

function AddRowButton() {
  const addRow = useRowAdder();

  const buttonStyle = css`
    grid-row: -2;
    grid-column: 1 / -3;
    user-select: none;
  `;

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        addRow();
      }}
    >
      +
    </button>
  );
}

export default AddRowButton;
