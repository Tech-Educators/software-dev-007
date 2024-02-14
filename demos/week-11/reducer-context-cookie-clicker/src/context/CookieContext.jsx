"use client";

import { createContext, useReducer, useState } from "react";

export const CookieContext = createContext();

const initialState = { cookies: 0, cpc: 1, upgradeCost: 10 };

function reducer(state, action) {
  switch (action.type) {
    case "click_cookie":
      return { ...state, cookies: state.cookies + state.cpc };
    case "buy_upgrade":
      return {
        ...state,
        cpc: state.cpc + (action.cpcIncrease || 1),
        cookies: state.cookies - state.upgradeCost,
        upgradeCost: state.upgradeCost + (action.costIncrease || 10),
      };
    case "reset":
      return { ...initialState };
  }
  return state;
}

export function CookieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <CookieContext.Provider value={{ state, dispatch }}>
      {children}
    </CookieContext.Provider>
  );
}
