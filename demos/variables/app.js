let score = 0; // this is a variable

// simple types
let age = 29; // Number
let name = "John"; // String
let isHandsome = true; // Boolean

// simple operations
let sum = 1 + 1; // 2
let difference = 1 - 1; // 0
let product = 2 * 2; // 4
let quotient = 1 / 2; // 0.5
let remainder = 5 % 2; // 1

// increment and decrement
let counter = 0;
// increase by 1
counter = counter + 1;
counter++;
counter += 1;

// decrease by 1
counter = counter - 1;
counter--;
counter -= 1;

// swap (the following code happens in order, line by line)
let x = 1;
let y = 2;
let temp = x;
x = y;
y = temp;
console.log("x:", x, "y:", y); // we can console log multiple things as once!

// simpler version of above
let a = 10;
let b = a;

// functions
// here we declare our function
function greet() {
  console.log("Hello world!");
}

// here we execute our function
// greet();
// greet();
// greet();

// function with a parameter
function greetAPerson(name) {
  console.log("Hello " + name);
}

greetAPerson("Jez");
greetAPerson("Tim");
greetAPerson("David Attenborough");
