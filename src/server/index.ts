import { config } from "dotenv";
config();

import app from "./app";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3003;

app.listen(PORT, () => {
  console.log(`Backend server initialized listening on port ${PORT}`)
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  process.exit();
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received.");
  process.exit();
});
