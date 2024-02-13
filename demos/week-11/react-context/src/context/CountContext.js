"use client";
import { createContext, useState, useContext } from "react";

// create our new context
const CountContext = createContext();

// create our provider that will wrap everything in out context using <CountContext.Provider>
export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <CountContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CountContext.Provider>
  );
}

// export a function that any component within our context (provider) can use to get the things the provider passed as values
export function useCount() {
  return useContext(CountContext);
}
