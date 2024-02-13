"use client";
import { useCount } from "@/context/CountContext";

export default function Header() {
  const { count } = useCount();

  return (
    <header>
      <h1>Use Context (thats an instruction, not a description)</h1>
      <p>Count is {count}</p>
    </header>
  );
}
