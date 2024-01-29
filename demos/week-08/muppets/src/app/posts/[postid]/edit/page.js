import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPost({ params }) {
  const post = await sql`SELECT * FROM posts WHERE id = ${params.postid}`;

  async function handleEditPost(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`UPDATE posts SET title = ${title}, content = ${content} WHERE id = ${params.postid}`;
    revalidatePath(`/posts`);
    revalidatePath(`/posts/${params.postid}`);
    redirect(`/posts/${params.postid}`);
  }

  return (
    <div>
      <h2>Edit - {post.rows[0].title}</h2>
      <form action={handleEditPost}>
        <h4>Add a new post</h4>
        <input
          name="title"
          placeholder="Blog Title"
          defaultValue={post.rows[0].title}
        />
        <textarea
          name="content"
          placeholder="Blog content"
          defaultValue={post.rows[0].content}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
