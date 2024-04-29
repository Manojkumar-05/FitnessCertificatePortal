import express from "express";
import { User } from "../models/User.js";
const router = express.Router();
import jwt from "jsonwebtoken";

router.post("/signup", async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.json({ message: "User already exists" });

  const newUser = new User({ userName, email, password });
  await newUser.save();

  return res.json({ status: true, message: "Record registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.json({ message: "No user exist with this email" });
  if (user.password !== password)
    return res.json({ message: "Incorrect Password" });

  const token = jwt.sign({ userName: user.userName }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
  return res.json({ status: true, message: "Login Successfull" });
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ status: false, message: "no token" });
    const decoded = await jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json(err);
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

export { router as UserRouter };
