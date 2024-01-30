import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Posts() {
  const { userId } = auth();
  // we are sorting, becuase vercel puts the last one to change at the end...
  const posts = await sql`SELECT * FROM posts ORDER BY id`;

  async function handleCreatePost(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title, content, user_id) VALUES (${title}, ${content}, ${userId})`;

    revalidatePath("/posts");
    // redirect("/posts"); // doesn't make sense here, because this is the page with the form
  }

  return (
    <div>
      <h2>Posts</h2>
      {userId && (
        <form action={handleCreatePost}>
          <h4>Add a new post</h4>
          <input name="title" placeholder="Blog Title" />
          <textarea name="content" placeholder="Blog content"></textarea>
          <button>Submit</button>
        </form>
      )}
      {!userId && <p>Sign in to add posts</p>}

      {posts.rows.map((post) => {
        return (
          <Link key={post.title} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        );
      })}
    </div>
  );
}
