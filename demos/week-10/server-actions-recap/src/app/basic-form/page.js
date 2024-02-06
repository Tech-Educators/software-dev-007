export default function BasicFormPage() {
  async function handleFormAction(formData) {
    "use server";
    // get the form data
    const username = formData.get("username");

    // do something with the form data (like a sql call)
    console.log(username);
  }

  return (
    <div>
      <h2>Basic Form Server Action</h2>
      <form action={handleFormAction}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
