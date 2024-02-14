export async function GET() {
  // here you can do a SQL query to your DB and return that in the response
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return new Response(JSON.stringify(posts));
}

export async function POST() {
  // do the post thing, like insert an item into the database
}

export async function DELETE() {
  // do the delete thing, like delete an item into the database
}

export async function PUT() {
  // do the put thing, like update an item into the database
}
