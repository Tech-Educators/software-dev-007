import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE players (
    name TEXT,
    number INT
  )
`);

// exec can be insecure when uyou are allowing users to input data
db.exec(`
  INSERT INTO players (name, number) VALUES ('Mullen', 10)
`);

// use .prepare() and .run() to run safe queries when the user is involved
db.prepare(`INSERT INTO players (name, number) VALUES (?, ?)`).run("Smith", 15);
