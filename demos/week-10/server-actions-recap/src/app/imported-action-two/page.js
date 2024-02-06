"use client";
import { serverActionTwo } from "@/lib/actions";
import { useState } from "react";

export default function PageWithServerActionTwo() {
  const [count, setCount] = useState(0);

  async function handleClick() {
    const res = await serverActionTwo();
    setCount(res);
  }

  return (
    <div>
      <h2>Imported Server Action page (two)</h2>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
}
