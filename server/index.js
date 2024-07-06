import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/user.js";
import { DataRouter } from "./routes/data.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, res.path);
  next();
});
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", UserRouter);
app.use("/data", DataRouter);
// app.use("/data", DataRouter);
mongoose.connect("mongodb://127.0.0.1:27017/authentication");

// app.get("/", (req, res) => {
//   res.json({Msg : "What up budd"})
// })

app.listen(process.env.PORT || 3000, () => console.log("Server Is Running"));
