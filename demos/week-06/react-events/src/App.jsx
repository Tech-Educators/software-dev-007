export default function App() {
  function clickHandler() {
    console.log("I am in a function");
  }

  return (
    <div>
      <h1>Events</h1>
      <p>Events are similar to normal JavaScript</p>
      <button onClick={() => console.log("I'm onClick!")}>
        Click for fun!
      </button>
      <button onClick={clickHandler}>Trigger the clickHandler function</button>
    </div>
  );
}
