import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function SinglePostPage({ params }) {
  const post = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const comments =
    await sql`SELECT * FROM comments where post_id = ${params.id}`;

  async function handleAddComment(formData) {
    "use server";
    const username = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO comments (username, content, post_id) VALUES (${username}, ${content}, ${params.id})`;
    revalidatePath(`/posts/${params.id}`);
  }

  return (
    <div>
      <h2>{post.rows[0].title}</h2>
      <p>{post.rows[0].content}</p>
      <form action={handleAddComment}>
        <h3>Add a comment</h3>
        <input name="username" placeholder="Username" />
        <textarea name="content" placeholder="Content"></textarea>
        <button>Submit</button>
      </form>
      {comments.rows.map((comment) => {
        return (
          <div key={comment.title}>
            <h3>{comment.username}</h3>
            <p>{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
}
