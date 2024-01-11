import { useState, useEffect } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1); // cookies per second

  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cps);

    // clean up the interval
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cps]);

  function increaseCps() {
    setCps(cps + 1);
  }

  return (
    <div>
      <p>Cookies: {cookies}</p>
      <p>Cookies per second: {cps}</p>
      <button onClick={increaseCps}>Buy Upgrade</button>
      <p className={cookies > 10 ? "" : "hidden"}>
        This changes based on the number of cookies using a ternary operator
      </p>
    </div>
  );
}
