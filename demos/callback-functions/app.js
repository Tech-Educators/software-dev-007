function doSomething(myCallbackFunction) {
  console.log("Doing something...");
  myCallbackFunction();
}

function theThingToDo() {
  console.log("Something done.");
}

function anotherThingToDo() {
  console.log("Another thing done.");
}

doSomething(theThingToDo);
doSomething(anotherThingToDo);

// another example from earlier in the week
button.addEventListener("click", theThingToDo);
