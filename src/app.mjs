import express from "express";
import "dotenv/config";
import userRouter from "./routers/user.router.mjs";
import photoRouter from "./routers/photo.router.mjs";

let app = express();

// middleware
app.use(express.json());

// routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/photos", photoRouter);

export default app;
