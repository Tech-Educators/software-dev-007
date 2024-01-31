export default async function BrokenPage() {
  // we've made an API call and it didn't work, it returns not what we wanted
  // as a result we are throwing an error
  throw new Error(
    "Looks like you messed up somewhere. Funny error mesasge that is meant to disarm you, and not make you leave my webstie! LOL"
  );

  return (
    <div>
      <p>Will you ever see this?</p>
      {posts.map((post) => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </div>
  );
}
