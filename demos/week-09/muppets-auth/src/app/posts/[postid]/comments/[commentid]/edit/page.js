import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditComment({ params }) {
  const { userId } = auth();
  const comment =
    await sql`SELECT * FROM comments WHERE id = ${params.commentid}`;

  async function handleEditComment(formData) {
    "use server";
    const username = formData.get("username");
    const content = formData.get("content");

    await sql`UPDATE comments SET username = ${username}, content = ${content} WHERE id = ${params.commentid}`;
    revalidatePath(`/posts/${params.postid}`);
    redirect(`/posts/${params.postid}`);
  }

  if (userId !== comment.rows[0].user_id) {
    return <p>404 not found (nuaghty)</p>;
  }

  return (
    <div>
      <h2>Edit Comment</h2>
      <form action={handleEditComment}>
        <h3>Add a comment</h3>
        <input
          name="username"
          placeholder="Username"
          defaultValue={comment.rows[0].username}
        />
        <textarea
          name="content"
          placeholder="Content"
          defaultValue={comment.rows[0].content}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
