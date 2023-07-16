import { useCallback, useRef, useState } from "react";

function TimerButton() {
  const [title, setTitle] = useState("section");

  const [isStop, setIsStop] = useState(true);
  const [count, setCount] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  return (
    <div
      onClick={() => {
        if (isStop) {
          start();
        } else {
          stop();
        }
      }}
    ></div>
  );
}

export default TimerButton;
