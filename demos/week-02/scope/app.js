// global variables can be accessed ANYWHERE
let global = "I am a global variable";
console.log(global);

function accessGlobal() {
  console.log(global);
}
accessGlobal();

// local variable can only be access within... scope
function accessLocal() {
  let local = "I am a local variable"; // this variable is ONLY available in the function
  console.log(local);
}
accessLocal();

// console.log(local); // this line doesn't work because local only exists within the accessLocal function

// confuse myself with variable names
function confuse() {
  let global = "This variable is the cause of much confusion";
  // even though we have a GLOBAL variable called "global", we have also got a local variable called "global" in this function. So that is what we will read.
  console.log(global);
}
confuse();

// even though we made a new "global", that one was only available within the confuse() function
console.log(global);

// nested function scope
function levelOne() {
  let lvl1Scoped = "I am in scope to level One";
  function levelTwo() {
    // lvl1Scoped is available to levelTwo because the variable and function are within the samne scope (the scope is the levelOne function)
    console.log(lvl1Scoped);
  }
  levelTwo();
}

levelOne();
