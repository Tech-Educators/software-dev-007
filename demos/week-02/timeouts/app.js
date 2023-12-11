// setTimeout
// our function to change the bg
function changeBG() {
  // setTimeout takes 2 paramters - a callback function, and a number
  // the callfunction will run AFTER the elapsed milliseconds has passed
  setTimeout(function () {
    document.body.style.backgroundColor = "teal";
  }, 5000);
}

const bgBtn = document.getElementById("bgBtn");
bgBtn.addEventListener("click", changeBG);

// setInterval
const plusP = document.getElementById("plusP");

function addPlus() {
  plusP.textContent = `${plusP.textContent} +`;
}

setInterval(addPlus, 1000);
