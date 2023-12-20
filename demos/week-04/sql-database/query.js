import Database from "better-sqlite3";
const db = new Database("database.db");

const players = db.prepare(`SELECT * FROM players`).all();

console.log(players);
