// EVENT HANDLERS
const button = document.querySelector("button");

button.addEventListener("click", () => console.log("Clicked!"));

// CONDITIONAL RENDERING
const conditionalP = document.getElementById("condition");

const isLoggedIn = false;

if (isLoggedIn) {
  conditionalP.textContent = "Welcome to your dashboard";
} else {
  conditionalP.textContent = "You need to log in scrub.";
}
