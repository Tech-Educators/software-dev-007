"use client";
import { useContext } from "react";
import { CookieContext } from "@/context/CookieContext";
import { ThemeContext } from "@/context/ThemeContext";

export default function BuyCookieBtn() {
  const { buyCookie, cpc } = useContext(CookieContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={buyCookie} className={theme}>
        Buy {cpc} cookie{cpc > 1 ? "s" : ""}
      </button>
    </div>
  );
}
