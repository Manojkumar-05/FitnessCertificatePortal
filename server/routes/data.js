import express from "express";
import { Data } from "../models/Data.js";

const router = express.Router();
// Improved code suggestions:
// 1. Use consistent spacing and indentation for better readability.
// 2. Consider using a more descriptive variable name instead of `newData`.
// 3. Handle potential errors when saving data to the database.

router.post("/submit", async (req, res) => {
  try {
    const { id, data, email } = req.body;
    console.log(email);
    const submittedOn = new Date();
    const dataToSave = new Data({ id, data, email, submittedOn});
    await dataToSave.save();
    console.log("Saved");
    return res.json({ status: true, message: "Record registered" });
  } catch (error) {
    console.error("Error saving data:", error);
    return res
      .status(500)
      .json({ status: false, message: "Error registering record" });
  }
});

// Added functionality to retrieve data from MongoDB:
router.get("/retrieve", async (req, res) => {
  try {
    console.log("Retrieve data route hit.");
    const data = await Data.find().sort({ submittedOn: -1 }).exec();
    console.log("Data retrieved from MongoDB:", data);
    return res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return res
      .status(500)
      .json({ status: false, message: "Error retrieving data" });
  }
});
export { router as DataRouter };
