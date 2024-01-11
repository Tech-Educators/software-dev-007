import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div>
      <h1>useEffect with timers</h1>
      <p>I am a p tag</p>
      <p>Count is {count}</p>
    </div>
  );
}
