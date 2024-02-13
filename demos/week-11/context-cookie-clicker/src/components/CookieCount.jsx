"use client";
import { useContext } from "react";
import { CookieContext } from "@/context/CookieContext";
import CookieCountServer from "./CookieCountServer";

export default function CookieCount() {
  const { cookies } = useContext(CookieContext);

  return (
    <div>
      <p>You have {cookies} Cookies</p>
      {/* here we are taking a value we got from context, and passing it to a server component */}
      <CookieCountServer cookies={cookies} />
    </div>
  );
}
