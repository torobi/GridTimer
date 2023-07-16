import { useRowAdder } from "../../hooks/useTimerAdder";

function AddRowButton() {
  const addRow = useRowAdder();

  return (
    <button
      onClick={() => {
        addRow();
      }}
    >
      +
    </button>
  );
}

export default AddRowButton;
