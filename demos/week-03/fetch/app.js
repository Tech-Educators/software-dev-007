async function getTodoItems() {
  // make our request
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("HTTP Response:", response);

  // we turn our response into JSON
  const json = await response.json();
  console.log("JSON DATA:", json);

  return json;
}

async function displayItems() {
  const data = await getTodoItems();

  // add our items to the ul
  const ul = document.getElementById("todolist");

  // add each item into array as a li to the page
  for (let i = 0; i < data.length; i++) {
    // create my li element
    const li = document.createElement("li");

    // add the text to the li
    li.textContent = data[i].title;

    // add event listener for crossing out
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // add the completed class if completed is true
    if (data[i].completed === true) {
      li.classList.add("completed");
    }

    // add the li to my ul
    ul.appendChild(li);
  }
}

displayItems();

// this is how we used to do it before async await
function getTodoItemsOLDBADWAYDONTDOTHIS() {
  // make our request
  // turn into json
  // return it
  return fetch("https://jsonplaceholder.typicode.com/todos/").then(function (
    response
  ) {
    return response.json();
  });
}
