import { sql } from "@vercel/postgres";
import "@/styles/catlist.css";

export default async function CatList() {
  const cats = await sql`SELECT * FROM sunflowercats`;

  return (
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
  );
}
