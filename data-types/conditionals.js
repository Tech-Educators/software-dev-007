// there are many ways to write a variable
// pascalCase <- use this one
// CamelCase
// snake_case
// kebab-case
// stupidcase

// here we set the variable, log it, change it and log it again
let myName = "Tim";
// console.log(myName);
myName = "Timmy";
// console.log(myName);

const yourName = "Jez";
// below line commented out because it will BREAK
// yourName = "Tim"; // this line won't work, because you can't change the value of a constant

// functions
function nameOfFunc() {
  // repeatable code
}
nameOfFunc(); // function execution

// conditionals
let a = 10;
let b = 5;
//a is equal b then do this thing
if (a == b) {
  console.log("A & B are equal");
} else {
  console.log("A & B are NOT equal");
}

// conditionals but types get in the way
let c = 10;
let d = "10";
if (c == d) {
  console.log("C & D are equal");
} else {
  console.log("C & D are NOT equal");
}
// when we compare a number and a string with == it thinks of the number as a string
// this is called "type coercion"

// conditionals without type coercion
let e = 10;
let f = "10";
if (e === f) {
  console.log("E & F are equal");
} else {
  console.log("E & F are NOT equal");
}
// when we compare a number and a string with === it is going to check the value AND the datatype are the same

// all the different logical operators
console.log(1 === 1); // true - strictly equal to
console.log(1 !== 1); // false - strictly NOT equal to
console.log(1 < 10); // true - less than
console.log(1 > 10); // false - greater than
console.log(1 <= 1); // true - less than or equal to
console.log(1 >= 1); // true - greater than or equal to
console.log(true); // true
console.log(false); // false
console.log(!true); // false

//
console.log(true && true); // true
console.log(true || false); // true
console.log(false && true); // false
console.log(false || true); // true

// && - AND
// || - OR
