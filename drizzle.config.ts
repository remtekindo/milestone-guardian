import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/database/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
});
