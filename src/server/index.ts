import express from "express";
import { api } from "./api";

const cors = require("cors");
const app = express();

app.use(cors);
app.use(api);

app.listen(
  3002, () => {
    console.log("Backend server running at: http://localhost:3002");
  }
)
