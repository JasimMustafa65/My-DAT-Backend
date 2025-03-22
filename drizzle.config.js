import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();        

export default defineConfig({
  schema: "./src/drizzle/schema.js",
  out: "./src/drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  verbose: true,
  strict: true,
});
