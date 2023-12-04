// global variables are used for things that the entire app should have access to
let score = 0;

function increaseScore() {
  score++;
}

increaseScore();

// local variables are used for things that the only the scope you're declaring in should have access to
function add(a, b) {
  let result = a + b;
  return result;
}

add(1, 2);
