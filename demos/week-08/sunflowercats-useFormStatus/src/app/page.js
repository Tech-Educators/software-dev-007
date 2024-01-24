import { sql } from "@vercel/postgres";

export default async function Home() {
  const cats = await sql`SELECT * FROM sunflowercats`;

  return (
    <div>
      <h2>Home</h2>
      <div className="cats">
        {cats.rows.map((cat) => {
          return (
            <div key={cat.name} className="cat">
              <h3>{cat.name}</h3>
              <p>Produces {cat.seeds} seeds</p>
              <p>{cat.height} tall</p>
              <p>{cat.cute ? "Very cute" : "This one is Jez."}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
