"use client";
import { submitFormWithReset } from "@/lib/actions";
import { useState } from "react";

export default function FormThatResets() {
  const [username, setUsername] = useState("");
  const submitWithUsername = submitFormWithReset.bind(null, username);

  function handleChange(event) {
    setUsername(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await submitWithUsername();
    setUsername("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
