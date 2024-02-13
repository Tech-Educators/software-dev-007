import BuyCookieBtn from "@/components/BuyCookieBtn";
import BuyUpgradeBtn from "@/components/BuyUpgradeBtn";
import CookieCount from "@/components/CookieCount";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <CookieCount />
      <BuyCookieBtn />
      <BuyUpgradeBtn />
    </div>
  );
}
