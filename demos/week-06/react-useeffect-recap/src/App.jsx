import { useState, useEffect } from "react";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTodoItems();

    const myTimer = setInterval(() => {
      // setCount(count + 1)
      setCount((currentCount) => currentCount + 1);
      console.log("hi");
    }, 1000);

    // clean up the timer (don't have a billion timers all running for each time the useEffect ran)
    return () => {
      clearInterval(myTimer);
    };
  }, []);

  async function getTodoItems() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setTodoItems(data);
  }

  return (
    <div>
      <h1>This is a recap of useEffect</h1>
      <p>First we will use it to fetch data, and map through it</p>
      <p>
        Then we will create a timer within useEffect (after trying to use timers
        WITHOUT useEffect)
      </p>
      <p>count: {count}</p>
      <h2>Mapping through an array to print out a component for each item</h2>
      <ul>
        {todoItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
