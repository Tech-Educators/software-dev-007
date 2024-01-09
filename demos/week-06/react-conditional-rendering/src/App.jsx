import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>Below is the most basic example of conditional rendering</h2>
      {true && <p>I am visible</p>}
      {false && <p>I never even make it to the page</p>}

      <h2 onClick={() => setShowModal(!showModal)}>
        Here is an example of conditional rendering using state (click me)
      </h2>
      {showModal && <p>I only show if showModal is true</p>}

      <h2 onClick={() => setShowModal(!showModal)}>
        Conditional rendering one thing OR another thing with a ternary operator
      </h2>
      {showModal ? <p>showModal is true</p> : <p>showModal is false</p>}
    </div>
  );
}
