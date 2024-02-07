import LevelFourClient from "./LevelFourClient";

export default function LevelThreeServer({ count, post, handleClick }) {
  return (
    <div className="lvl3">
      <h2>I AM ON THE SERVER (lvl 3)</h2>
      <p>{count}</p>
      <p>Post title from lvl 1: {post.title}</p>
      <LevelFourClient handleClick={handleClick} />
    </div>
  );
}
