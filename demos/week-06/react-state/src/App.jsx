import { useState } from "react";

export default function App() {
  //    [stateVariable, mutationFunction] = useState(initialValue)
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    if (count > 50) {
      console.log("WOAH THERE!");
    }
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase by 1</button>
    </div>
  );
}
