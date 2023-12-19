const form = document.getElementById("messageForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData);

  // we are going to give formValues to our API
  // our API will accept this object and do something with it
  // the somthing in this case is jsut send it back
  // in the future we will add an entry to the DATABASE with our formValues
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
});
