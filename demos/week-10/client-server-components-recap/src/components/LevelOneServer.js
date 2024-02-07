import LevelTwoClient from "./LevelTwoClient";

export default async function LevelOneServer() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return (
    <div className="lvl1">
      <h2>I AM ON THE SERVER (lvl 1)</h2>
      <LevelTwoClient post={post} />
    </div>
  );
}
