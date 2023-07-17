import { useColAdder } from "../../hooks/useTimerAdder";

function AddColButton() {
  const addCol = useColAdder();

  const buttonStyle: React.CSSProperties = {
    width: "50px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        addCol();
      }}
    >
      +
    </button>
  );
}

export default AddColButton;
