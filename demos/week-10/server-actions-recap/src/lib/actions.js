"use server";

export async function serverActionOne(formData) {
  console.log("I am the first server action defined in actions.js");
  const username = formData.get("username");
  console.log(username);
}

export async function serverActionTwo() {
  console.log("I am the other server action defined in actions.js");
  // let's pretned this random number is retirved from a database (it isn't really)
  const randomNumberOfLikes = Math.floor(Math.random() * (1000 - 0 + 1) + 0);

  // for example, you could be increasing a number in a db, then getting the updated number abd returning that

  return randomNumberOfLikes;
}

export async function submitFormWithReset(username, formData) {
  console.log(username);
}
