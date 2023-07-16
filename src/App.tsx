import "./App.css";
import AddColButton from "./components/addColButton/AddColButton";
import AddRowButton from "./components/addRowButton/AddRowButton";
import TimerList from "./components/timerList/TimerList";

function App() {
  const hContainer: React.CSSProperties = {
    display: "flex",
  };

  return (
    <>
      <div style={hContainer}>
        <TimerList />
        <AddColButton />
      </div>
      <AddRowButton />
    </>
  );
}

export default App;
