import app from "./app";
import { config } from "dotenv";

config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3003;

app.listen(port, () => {
  console.log(`Backend Server initialized listening on port ${port}`);
})

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server.")
  process.exit()
})

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server.")
  process.exit()
})
