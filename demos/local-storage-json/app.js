const reallyCoolObj = {
  name: "Feeeee",
  favAnimal: "Giraffe",
  favFood: "Spaghetti Bolognese Ice Cream",
  favPlace: "Tech Educators (The Hawaii Campus)",
};

// PUTTING SOMETHING IN LOCALSTORAGE
// we turn our object into a stringified object with JSON.stringify()
const stringifiedObj = JSON.stringify(reallyCoolObj);

// localStoage only wants strings, so we give it a stringified object
localStorage.setItem("Fi", stringifiedObj);

// GETTING SOMETHING OUT OF LOCALSTORAGE
// now we retrieve our item from localStorage (but its a string... waaaa)
const myLocalObj = localStorage.getItem("Fi");

// now we need to turn it BACK into a JavaScript object
const parsedObj = JSON.parse(myLocalObj);

console.log(parsedObj.name);
