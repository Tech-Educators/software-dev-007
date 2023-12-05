const myName = "Tim"; // string
const myAge = 29; // age
const myHandsomeness = true; // boolean
const myChildren = ["Ezra", "Caleb", "Jez"]; // array

// like an array, but each item has a "key: value" pair
const timStuff = { name: "Tim", age: 29, handsome: true };

console.log(timStuff);

// accessing specific properties
// using bracket notation
timStuff["name"]; // "Tim"
timStuff["handsome"]; // true

// dot notation
timStuff.name; // "Tim"
timStuff.handsome; // true

// adding properties
timStuff.favouriteFood = "Pizza";
console.log(timStuff);

// updating properties
timStuff.age = 30;
console.log(timStuff);

// delete (you may never use this, who knows)
delete timStuff.age;
console.log(timStuff);

// arrays and objects
// each object can represent 1 thing (in this case products)
const product1 = { title: "Squadron Leader", price: 25 };
const product2 = { title: "MacBook Pro", price: 2000 };

// we can put objects in arrays
const products = [
  { title: "Squadron Leader", price: 25 },
  { title: "MacBook Pro", price: 2000 },
];

// accessing objects in arrays
products[0]; // { title: "Squadron Leader", price: 25 }
products[0].title; // "Squadron Leader"

// accessing properties that don't exist OR from something that isn't an object (like below)
products[2]; // undefined
products[2].title; // error, because undefined.title doesn't work

// example of CSS properties in an object
const styles = {
  color: "#ffffff",
  backgroundColor: "tomato",
  fontFamily: "monospace",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
// THIS WON'T ACTUALLY STYLE THE PAGE
