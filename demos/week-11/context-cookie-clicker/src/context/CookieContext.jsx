"use client";

import { createContext, useState } from "react";

export const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [cookies, setCookies] = useState(0);
  const [cpc, setCpc] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(10);

  function buyCookie() {
    // increase our cookies by the cookies per click value
    setCookies(cookies + cpc);
  }

  function buyUpgrade() {
    // increase our cookies per click value
    setCpc(cpc + 1);

    // "spend" 10 cookies to do this
    setCookies(cookies - upgradeCost);

    // increase the cost of the next upgrade
    setUpgradeCost(upgradeCost + 10);
  }

  return (
    <CookieContext.Provider
      value={{ cookies, cpc, upgradeCost, buyCookie, buyUpgrade }}
    >
      {children}
    </CookieContext.Provider>
  );
}
