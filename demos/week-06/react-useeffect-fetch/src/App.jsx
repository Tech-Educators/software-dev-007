import { useState, useEffect } from "react";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  // useEffect is for when we want something to happen when the page loads
  // we can also use it to listen to certain state variables changing, and run then too
  useEffect(() => {
    handleGetTodoItems();
  }, []);

  async function handleGetTodoItems() {
    // make a fetch request to my api
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    // set todoItems to be the response
    setTodoItems(data);
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todoItems.map((item) => {
          return <li key={item.id + item.title}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
