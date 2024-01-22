export default function SinglePostPage({ params }) {
  // here we might make an API call to get the post with the id that matches params.id
  return (
    <div>
      <h2>Individual post {params.id}</h2>
      <p>
        Here we would NORMALLY display the content from our API call, based on
        our id in the params.
      </p>
      <p>
        Params is in this page, an object with a property called &quot;id&quot;.
      </p>
      <p>This is because we called our folder [id].</p>
      <p>
        ew can replace the second part of the url with ANYTHING and it will
        become params.id
      </p>
    </div>
  );
}
