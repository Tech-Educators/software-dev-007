const amaumber = 10;
function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    debugger;
  }
}

// countToTen();

function add(a, b) {
  console.log(a + b);
  debugger;
}

// add(10, 11);

function whileMyConsoleGentlyCount() {
  let counter = 1;

  while (counter < 100) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
    counter++;
  }
}

whileMyConsoleGentlyCount();
