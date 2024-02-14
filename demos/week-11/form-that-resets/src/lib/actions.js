"use server";

export async function submitActionOne(formData) {
  const username = formData.get("username");
  // this clg represents me doing anything server side, like adding a new entry to my db
  console.log(username);
}

// this one is used with the client side form
export async function submitActionTwo(username, formData) {
  console.log("Server", username);
}
