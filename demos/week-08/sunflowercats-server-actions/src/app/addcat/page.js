import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddCat() {
  async function handleAddCat(formData) {
    "use server";

    // get the things from our formData object
    const name = formData.get("name");
    const seeds = formData.get("seeds");
    const height = formData.get("height");

    // make our sql request
    await sql`INSERT INTO sunflowercats (name, seeds, height, cute) VALUES (${name}, ${seeds}, ${height}, true)`;

    // revalidate the path so the new item shows
    revalidatePath("/");

    // take me to the home page
    redirect("/");
  }

  return (
    <div>
      <h2>Add Sunflowercat</h2>
      <form action={handleAddCat}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" placeholder="Name" />

        <label htmlFor="seeds">Seeds</label>
        <input name="seeds" id="seeds" placeholder="Seeds" />

        <label htmlFor="height">Height</label>
        <input name="height" id="height" placeholder="Height" />

        <button type="submit">Add Sunflowercat</button>
      </form>
    </div>
  );
}
