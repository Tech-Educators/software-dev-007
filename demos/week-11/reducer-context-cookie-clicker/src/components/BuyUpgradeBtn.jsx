"use client";
import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function BuyUpgradeBtn() {
  const { state, dispatch } = useContext(CookieContext);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "buy_upgrade" })}
        disabled={state.cookies < state.upgradeCost}
      >
        Buy an upgrade (costs {state.upgradeCost} cookies)
      </button>

      <p>
        Weird game breaking upgrade that might not actually be worth the
        cookies... balancing is hard, but useReducer is easy.
      </p>
      <p>
        Entirely optional, it just illustrate passing multipel proerties to our
        action in the dispatch function
      </p>
      <button
        onClick={() =>
          dispatch({
            type: "buy_upgrade",
            cpcIncrease: 3,
            costIncrease: state.upgradeCost * 2,
          })
        }
        disabled={state.cookies < state.upgradeCost * 2}
      >
        Buy a better upgrade (costs {state.upgradeCost * 2} cookies)
      </button>
    </div>
  );
}
