import { useRowAdder } from "../../hooks/useTimerAdder";

function AddRowButton() {
  const addRow = useRowAdder();

  const buttonStyle: React.CSSProperties = {
    width: "calc(100% - 50px)",
  };

  const buttonContainer: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "left",
  };

  return (
    <div style={buttonContainer}>
      <button
        style={buttonStyle}
        onClick={() => {
          addRow();
        }}
      >
        +
      </button>
    </div>
  );
}

export default AddRowButton;
