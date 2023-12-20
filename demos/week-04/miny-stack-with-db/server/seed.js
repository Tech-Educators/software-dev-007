import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS jokes (
    setup TEXT,
    punchline TEXT
  )
`);

db.exec(`
    INSERT INTO jokes (setup, punchline)
    VALUES
    ('Why was the sea wet?', 'Because the sea weed.'),
    ('Why did the chicken go to the other side?', 'To see his flatmat.'),
    ('Why did the server cross the road?','To get to the other side... but it crashed half way and rolled back to its starting point.'),
    ('Why do JavaScript developers need to wear glasses?', 'Because they do not C#'),
    ('Why was 6 afraid of 7?', 'Because 7, 8, 9.')
`);
