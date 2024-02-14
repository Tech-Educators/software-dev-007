"use client";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + (action.payload || 1),
      };
    case "decrement":
      return { ...state, count: state.count - (action.payload || 1) };
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Using useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Click!</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Click!</button>
      <p>This is where it gets funky!</p>
      <button onClick={() => dispatch({ type: "increment", payload: 100 })}>
        Click for 100!
      </button>
    </div>
  );
}
