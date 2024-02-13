"use client";
import { useCount } from "@/context/CountContext";

export default function CountButton() {
  const { count, incrementCount, decrementCount } = useCount();

  return (
    <>
      <button onClick={incrementCount}>Count: {count}</button>
      <button onClick={decrementCount}>REMOVE!</button>
    </>
  );
}
