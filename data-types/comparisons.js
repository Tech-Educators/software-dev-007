let a = 1;
let b = 2;
let c = 3;
let d = 4;

if (!true || !false) {
  console.log("its true!");
} else {
  console.log("its flase!");
}

// a < b     true
// c > a     true
// d < a     false
// b === d   false

// a < b && d < a     false
// a < b || d < a     true
// false || b === d   false

// c > a && a < b && d < a      false
