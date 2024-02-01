import LikeButton from "@/components/LikeButton";

export default function Home() {
  const post_id = 17; // this is from params on a dynamic route (but this is just an example)

  return (
    <div>
      <h2>Home</h2>
      <LikeButton post_id={post_id} />
    </div>
  );
}
