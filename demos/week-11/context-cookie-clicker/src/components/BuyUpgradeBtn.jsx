"use client";
import { useContext } from "react";
import { CookieContext } from "@/context/CookieContext";

export default function BuyUpgradeBtn() {
  const { buyUpgrade, upgradeCost, cookies } = useContext(CookieContext);

  return (
    <div>
      <button onClick={buyUpgrade} disabled={cookies < upgradeCost}>
        Buy an upgrade (costs {upgradeCost} cookies)
      </button>
    </div>
  );
}
