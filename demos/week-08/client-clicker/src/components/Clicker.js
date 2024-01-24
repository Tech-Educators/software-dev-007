"use client"; // this is called the use client directive
import { useState } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me! {count}</button>
    </div>
  );
}
