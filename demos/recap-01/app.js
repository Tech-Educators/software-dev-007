// Variables
let myAge = 29; // I used let becuase the value CAN change
const myName = "Tim"; // I used const because I love my name
var stupid = "yuk"; // we don't use this one. Naughty.

// Data types
let myString = "This is a string";
let myNumber = 10;
let timHandsomeStatus = true; // this one is called Boolean
let myArr = [1, 2, 3, 4, 5];
let myObj = { drink: "coffee", caffeine: true, jitters: "many" };

// Conditionals
if (1 > 3) {
  console.log("WRONG");
} else {
  console.log("Maths is fun.");
}

// DOM - Document Object Models
const p = document.getElementById("pWithID");
p.textContent = "I have been changed with DOM manipulation";

// Events
const eventBtn = document.getElementById("eventBtn");

eventBtn.addEventListener("click", function () {
  eventBtn.classList.toggle("red");
});
