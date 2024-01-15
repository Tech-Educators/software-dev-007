import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    console.log(form);
    if (form.password.length > 6) {
      // do something like logging in the user
      setForm({
        username: "",
        password: "",
      });
      setPasswordError("");
    } else {
      // moan about the password
      setPasswordError("your password isn't long enough");
    }
  }

  function handleChange(event) {
    setForm({
      ...form, // the spread operator will add all existing values of form
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  function preFillForm() {
    setForm({
      username: "Wollivan",
      password: "poop",
    });
  }

  return (
    <div>
      <button onClick={preFillForm}>Prefill the Form</button>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          onChange={handleChange}
          value={form.username}
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <p>{passwordError}</p>

        <button>Log In</button>
      </form>
    </div>
  );
}
