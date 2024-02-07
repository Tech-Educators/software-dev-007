"use client";
import { useState } from "react";
import LevelThreeServer from "./LevelThreeServer";

export default function LevelTwoClient({ post }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="lvl2">
      <h2>I AM ON THE CLIENT (lvl 2)</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>GO UP</button>
      <LevelThreeServer count={count} post={post} handleClick={handleClick} />
    </div>
  );
}
