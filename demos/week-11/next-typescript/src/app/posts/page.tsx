import Link from "next/link";
import { post } from "@/lib/types";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: post[] = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post: post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>Visit post</Link>
          </div>
        );
      })}
    </div>
  );
}
