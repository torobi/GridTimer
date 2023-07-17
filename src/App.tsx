import "./App.css";
import TimerGrid from "./components/timerGrid/TimerGrid";
import { useRowAdder } from "./hooks/useTimerAdder";

function App() {
  const addRow = useRowAdder();
  addRow();

  return (
    <>
      <TimerGrid />
    </>
  );
}

export default App;
