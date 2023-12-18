import express from "express"; // import the node_module
const app = express(); // instantiating our app
app.use(express.json());

// an example of some data
const messages = [
  { name: "Wollivan", message: "How are you enjoying this lecture?" },
  { name: "Sam", message: "What are you even chatting about?" },
  {
    name: "Wollivan",
    message: "You are alwasys so mean to me. I'm never talking to you again.",
  },
];

// HERE ARE THE ENDPOINTS
app.get("/", function (request, response) {
  response.send("You have visited the root route.");
});

// when the user goes to /messages using a GET HTTP method, we will run this function
app.get("/messages", function (request, response) {
  response.json(messages);
});

// i am going to pass {num1: 4, num2: 6} in the body
app.post("/add", function (request, response) {
  const sum = request.body.num1 + request.body.num2;
  response.json(sum);
});
// HERE ENDS THE ENPOINTS

// tell our server to run on port 8080, and do the CBF once to tell us whats going on
app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
