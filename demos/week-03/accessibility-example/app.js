// go and get all my elements from the page
const elements = document.querySelectorAll("input, button, textarea, a"); // returns an array of DOM nodes

// add an event lister for each just to console log when it is being focused by the user
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("focus", function (event) {
    console.log(`Element ${event.currentTarget} is focused`);
  });
}

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Button has been clicked");
});
