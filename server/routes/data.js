import express from "express";
const router = express.Router();
import { Data } from "../models/Data.js";

router.post("/submit", async (req, res) => {
  const {id, data}  = req.body;
  const submittedOn = new Date()
  const newData = new Data({id, data , submittedOn});
  await newData.save();
  console.log("Saved");
  return res.json({ status: true, message: "Record registered" });
});

export { router as DataRouter };
