import { revalidatePath } from "next/cache";

export default async function LikeButton({ post_id }) {
  const { userId } = auth(); // as an example of getting the userid from clerk

  const likesNum =
    await sql`SELECT * FROM post_likes WHERE post_id = ${post_id}`;

  // check if the user has liked the post
  const likedRes =
    await sql`SELECT * FROM post_likes WHERE post_id = ${post_id}, user_id = ${userId}`;
  const liked = likedRes.rows.length === 0 ? false : true;

  async function handleLike() {
    "use server";

    console.log(post_id); // instead of console logging, I would add an item to my likes junction table

    await sql`INSERT INTO post_likes (user_id, post_id) VALUES (${userId}, ${post_id})`;
    revalidatePath(`/this/path`);
  }

  return (
    <form action={handleLike}>
      <p>{likesNum.rows.length}</p>
      <button>Like</button>
    </form>
  );
}
