export default function PostPage({ params, searchParams }) {
  return (
    <div>
      <h2>Post Page</h2>
      <p>
        Params is whatever value we give the [id] dynamic route. In this case:{" "}
        {params.id}
      </p>
      <p>
        searchParams is the same as vanila searchParams, its whatever key value
        pairs we put after the ?
      </p>
      <p>
        So if we put ?name=Tim we will be able to access searchParams.name and
        get {searchParams.name}
      </p>
    </div>
  );
}
