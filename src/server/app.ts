import express from "express";
import usersRouter from "./routes/api/users";
import userRouter from "./routes/api/user";


const app = express();

app.use(express.json());

app.use("/api/users", usersRouter);

app.use("/api/user", userRouter);

export default app;
