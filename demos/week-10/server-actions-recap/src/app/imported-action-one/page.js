import { serverActionOne } from "@/lib/actions";

export default function PageWithServerActionOne() {
  return (
    <div>
      <h2>Imported Server Action page (one)</h2>
      <form action={serverActionOne}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
