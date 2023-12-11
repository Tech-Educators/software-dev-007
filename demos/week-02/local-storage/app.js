const colourForm = document.getElementById("colourForm");

// this function takes colourParam and sets the bg of the body to its value
function changeBG(colourParam) {
  document.body.style.background = colourParam;
}

// changeBG("tomato"); // this will set the background of the body to tomato

function handleSubmit(event) {
  // this function stops the form refreshing page
  event.preventDefault();

  // then it gets the colour from our form (name="colour")
  const myColour = event.target.colour.value;

  // runs our changeBG function giving our colour from the form, as an argument (so it becomes colourParam)
  changeBG(myColour);

  // set our local storage to be what we just typed
  localStorage.setItem("localColour", myColour);
}

colourForm.addEventListener("submit", handleSubmit);

// function to retireve our colour from localStorage and set the BG
function loadColour() {
  const localColour = localStorage.getItem("localColour");
  changeBG(localColour);
}

loadColour();
