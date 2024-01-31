"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>OH NO! It looks like there was an error thrown</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
