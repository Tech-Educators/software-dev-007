// my global variable
let bg = "yellowgreen";

// retrieve our button DOM node
const colourBtn = document.getElementById("colourBtn");

// declare our function
function changeColour() {
  // change the text of the button
  colourBtn.textContent = `Change to ${bg}`;

  // change bg to be the OTHER colour that it currently isn't
  if (bg === "yellowgreen") {
    bg = "wheat";
  } else {
    bg = "yellowgreen";
  }

  // set the background colour of our page to be the value of bg
  document.body.style.background = bg;
}

// listen for the click event of our button and run our function
colourBtn.addEventListener("click", changeColour);
