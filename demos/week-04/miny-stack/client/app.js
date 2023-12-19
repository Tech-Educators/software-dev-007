// call my api
async function getMessage() {
  // call our API with fetch
  const response = await fetch(
    "https://miny-stack-server.onrender.com/message"
  );

  // turn the response into json
  const json = await response.json();
  console.log(json);
  // put my message on the page
  const p = document.getElementById("message");
  p.textContent = json.message;
}

getMessage();
