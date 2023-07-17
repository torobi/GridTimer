import { CookiesProvider } from "react-cookie";
import "./App.css";
import TimerGrid from "./components/timerGrid/TimerGrid";
import { useRowAdder } from "./hooks/useTimerAdder";

function App() {
  const addRow = useRowAdder();
  addRow();

  return (
    <>
      <CookiesProvider>
        <TimerGrid />
      </CookiesProvider>
    </>
  );
}

export default App;
