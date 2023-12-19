import express from "express"; // import express from node_modules
import cors from "cors"; // import cors from node_modules

const app = express(); // created an instance of express in the const "app"

app.use(express.json()); // allows us to look at the json in the body of the request

app.use(cors()); // middleware
// middleware is like a bridge between the client and the server

// endpoint
app.get("/message", function (request, response) {
  response.json({ message: "I am the message" });
});

// start the server
app.listen(8080, function () {
  console.log("Server is listening to port 8080");
});
// run "node server" in the terminal to start the server
