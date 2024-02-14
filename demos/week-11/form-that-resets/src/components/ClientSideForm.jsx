"use client";
import { submitActionTwo } from "@/lib/actions";
import { useState } from "react";

export default function ClientSideForm() {
  const [username, setUsername] = useState("");
  const submitActionWithUsername = submitActionTwo.bind(null, username);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Client", username);

    await submitActionWithUsername();

    // reset the form
    setUsername("");
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={username}
      />
      <button>Submit</button>
    </form>
  );
}
