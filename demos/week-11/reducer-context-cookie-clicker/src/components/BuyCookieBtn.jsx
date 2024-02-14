"use client";
import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";
import { ThemeContext } from "../context/ThemeContext";

export default function BuyCookieBtn() {
  const { state, dispatch } = useContext(CookieContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "click_cookie" })}
        className={theme}
      >
        Buy {state.cpc} cookie{state.cpc > 1 ? "s" : ""}
      </button>
    </div>
  );
}
