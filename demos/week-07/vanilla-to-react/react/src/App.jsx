export default function App() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <p>You need to log in scrub</p>;
  }

  return (
    <div>
      <h1>React App</h1>
      <h2>Event handlers</h2>
      <button onClick={() => console.log("Clicked!")}>Click me!</button>

      <h2>Conditional Rendering</h2>
      {isLoggedIn && <p>Welcome to your dashboard</p>}
    </div>
  );
}
