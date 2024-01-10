import { useState } from "react";
import PageHeader from "./components/PageHeader";
import CountButton from "./components/CountButton";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <PageHeader count={count} />
      <CountButton handleCount={handleCount} />
    </div>
  );
}
