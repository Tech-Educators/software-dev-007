import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h2>Posts</h2>
      <div className="posts-list">
        <Link href="/posts/1">Post 01</Link>
        <Link href="/posts/2">Post 02</Link>
        <Link href="/posts/3">Post 03</Link>
      </div>
    </div>
  );
}
