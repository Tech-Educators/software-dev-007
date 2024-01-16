import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // allow us to use the environment variables (like the DATABASE_URL)

const PORT = 8080;
const app = express();
app.use(cors());

// connect to my database
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// my endpoints
app.get("/", (request, response) => {
  response.json("This is my root route. How roude.");
});

app.get("/bees", async (request, response) => {
  const result = await db.query("SELECT * FROM bees");
  response.json(result.rows);
});

// start my server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
