import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function SinglePostPage({ params }) {
  const post = await sql`SELECT * FROM posts WHERE id = ${params.postid}`;
  const comments =
    await sql`SELECT * FROM comments where post_id = ${params.postid} ORDER BY id desc`;

  async function handleAddComment(formData) {
    "use server";
    const username = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO comments (username, content, post_id) VALUES (${username}, ${content}, ${params.postid})`;
    revalidatePath(`/posts/${params.postid}`);
  }

  return (
    <div>
      <h2>{post.rows[0].title}</h2>
      <p>{post.rows[0].content}</p>
      <Link href={`/posts/${params.postid}/edit`}>Edit</Link>

      <form action={handleAddComment}>
        <h3>Add a comment</h3>
        <input name="username" placeholder="Username" />
        <textarea name="content" placeholder="Content"></textarea>
        <button>Submit</button>
      </form>

      {comments.rows.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.username}</h3>
            <p>{comment.content}</p>
            <Link href={`/posts/${params.postid}/comments/${comment.id}/edit `}>
              Edit
            </Link>
          </div>
        );
      })}
    </div>
  );
}
