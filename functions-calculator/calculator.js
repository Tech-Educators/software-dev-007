// function to add two numbers
function add(a, b) {
  return a + b;
}

// function to substract a number from another
function subtract(a, b) {
  return a - b;
}

// function to mutliply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    // if this runs, the function will end, because "return" always ends the function
    return "Cannot divide by zero";
  }

  return a / b;
}

function calculate(a, b, func) {
  return func(a, b);
}

calculate(10, 4, multiply); // 40
calculate(3, 1, subtract); // 2
calculate(30, 10, divide); // 3
calculate(1, 1, add); // 2

// a more manual and totally acceptable way of doing the above
// function calculate(a, b, operator) {
//   if (operator === "+") {
//     return add(a, b);
//   } else if (operator === "-") {
//     return subtract(a, b);
//   } else if (operator === "*") {
//     return multiply(a, b);
//   } else if (operator === "/") {
//     return divide(a, b);
//   }
// }

// calculate(10, 4, "*"); // 40
// calculate(3, 1, "-"); // 2
// calculate(30, 10, "/"); // 3
// calculate(1, 1, "+"); // 2
