import { css } from "@emotion/react";
import { useColAdder } from "../../hooks/useTimerAdder";

function AddColButton() {
  const addCol = useColAdder();

  const buttonStyle = css`
    grid-row: 2 / -3;
    grid-column: -2;
  `;

  return (
    <button
      css={buttonStyle}
      onClick={() => {
        addCol();
      }}
    >
      +
    </button>
  );
}

export default AddColButton;
