import { post } from "@/lib/types";

type ParamsType = {
  params: { id: string };
};

export default async function SinglePost({ params }: ParamsType) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: post = await res.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
