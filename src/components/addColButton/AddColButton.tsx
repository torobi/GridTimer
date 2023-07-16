import { useColAdder } from "../../hooks/useTimerAdder";

function AddColButton() {
  const addCol = useColAdder();

  return (
    <button
      onClick={() => {
        addCol();
      }}
    >
      +
    </button>
  );
}

export default AddColButton;
