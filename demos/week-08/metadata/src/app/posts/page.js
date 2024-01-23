import Link from "next/link";

export const metadata = {
  title: "Posts | Jez",
};

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <h2>Posts</h2>
      <p>Lorem</p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h4>
          </div>
        );
      })}
    </div>
  );
}
