const form = document.getElementById("jokeForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // get the joke we've written
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  // send the joke to the API
  const response = await fetch("http://localhost:8080/jokes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const json = await response.json();

  console.log(json);
});

async function getJokes() {
  // get the jokes from our Database via our API
  const response = await fetch("http://localhost:8080/jokes");
  const jokes = await response.json();

  // loop through the jokes and render them on the page
  jokes.forEach(function (joke) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = joke.setup;
    p.textContent = joke.punchline;

    const jokeContainer = document.getElementById("jokeContainer");

    jokeContainer.appendChild(h3);
    jokeContainer.appendChild(p);
  });
  // profit?
}

getJokes();
