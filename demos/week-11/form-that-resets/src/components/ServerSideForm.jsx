import { submitActionOne } from "@/lib/actions";

export default function ServerSideForm() {
  return (
    <form action={submitActionOne}>
      <input name="username" placeholder="Username" />
      <button>Submit</button>
    </form>
  );
}
