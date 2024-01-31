import Link from "next/link";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
