function changeTheColour() {
  document.body.style.background = "teal";
}

function changeTheTextColour() {
  document.body.style.color = "white";
}

function changeTheFont() {
  document.body.style.fontFamily = "monospace";
}

function addP() {
  const myP = document.createElement("p");
  myP.textContent = "a funny sentence";
  document.body.appendChild(myP);
}

function makeTheTitleHuge() {
  const myH1 = document.getElementById("title");
  myH1.style.fontSize = "32rem";
}

function whereFren() {
  const bill = document.getElementById("bill");
  bill.classList.toggle("hidden");
}
