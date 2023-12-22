import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

// request.query will look like { id: 2 }
// if we make the url /jokes?id=2
app.get("/jokes", function (request, response) {
  let jokes = [];

  // check if the user has provided a query in the URL (/jokes?id=2)
  if (request.query.id) {
    jokes = db
      .prepare(`SELECT * FROM jokes WHERE id=${request.query.id}`)
      .all();
  } else {
    // if the URL has no query, get ALL the jokes
    jokes = db.prepare("SELECT * FROM jokes").all();
  }

  // send either the array of all the jokes, or just the one we queried for
  response.json(jokes);
});

app.post("/jokes", function (request, response) {
  console.log(request.body);
  const setup = request.body.setup;
  const punchline = request.body.punchline;

  const newJoke = db
    .prepare(`INSERT INTO jokes (setup, punchline) VALUES (?, ?)`)
    .run(setup, punchline);

  response.json(newJoke);
});

app.listen(8080, function () {
  console.log("IT'S WORKING!");
});
