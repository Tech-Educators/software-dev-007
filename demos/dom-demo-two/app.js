// Part 01: Creating a new element and adding it to the page
// create the element
const p = document.createElement("p"); // <p></p>

// set the element content
p.textContent = "I have added this p tag with JavaScript";

// add the element to the page
document.body.appendChild(p);

// Part 02: Accessing the excisting elements on the page, and modifying them
const h1 = document.getElementById("title");
h1.textContent = "All your base are now belong to us";

// Part 03: DOM plus Events (increase the number on click)
const increaseBtn = document.getElementById("increaseBtn");
const numberP = document.getElementById("number");
let counter = 0;

function addOne() {
  counter++; // increase counter by 1
  numberP.textContent = counter;
}

increaseBtn.addEventListener("click", addOne);
