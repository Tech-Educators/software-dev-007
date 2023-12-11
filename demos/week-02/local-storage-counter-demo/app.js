let counter = 0; // our overall count
const p = document.querySelector("p");
const button = document.querySelector("button");

function addOne() {
  // increasing counter by 1
  counter++;

  // reflicting the change of counter on the page
  p.textContent = counter;

  // i want store counter in localStorage
  localStorage.setItem("counter", counter);
}

button.addEventListener("click", addOne);

// function to get the counter from localSotrage and update my variable and what is on the page
function getLocalStorage() {
  // get the coutner value from localStorage
  const localCounter = localStorage.getItem("counter");

  // update our counter variable
  counter = localCounter;

  // update the p tag on the page
  p.textContent = counter;
}

getLocalStorage();
