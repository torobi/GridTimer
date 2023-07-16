import "./App.css";
import AddColButton from "./components/addColButton/AddColButton";
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
    </>
  );
}

export default App;
