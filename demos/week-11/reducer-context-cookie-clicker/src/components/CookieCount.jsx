"use client";
import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function CookieCount() {
  const { state } = useContext(CookieContext);

  return (
    <div>
      <p>You have {state.cookies} Cookies</p>
    </div>
  );
}
