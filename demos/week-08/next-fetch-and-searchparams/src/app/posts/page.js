import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();

  // if the user has put /posts?user=10
  // I want to only show the posts where the userID is 10
  if (searchParams.user) {
    posts = posts.filter((post) => post.userId == searchParams.user);
  }

  // if the user has put sort=desc
  // I want to reverse the posts
  if (searchParams.sort) {
    posts.reverse();
  }

  return (
    <div>
      <h2>My Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} ({post.userId})
            </Link>
          </div>
        );
      })}
    </div>
  );
}
