import CookieCount from "../components/CookieCount";
import BuyCookieBtn from "../components/BuyCookieBtn";
import BuyUpgradeBtn from "../components/BuyUpgradeBtn";
import Reset from "../components/Reset";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <CookieCount />
      <BuyCookieBtn />
      <BuyUpgradeBtn />
      <Reset />
    </div>
  );
}
