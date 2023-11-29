let guess = prompt("Guess the best number.");
let favNum = 7;

// i need to use == and not === because guess is a string
if (guess == favNum) {
  console.log("That's right, thats my favourite number");
} else {
  console.log("how could you forget?!!?");
}
