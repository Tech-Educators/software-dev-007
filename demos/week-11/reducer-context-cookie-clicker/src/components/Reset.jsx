"use client";

import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function Reset() {
  const { dispatch } = useContext(CookieContext);

  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
}
