import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  data: Object,
  email: String,
  submittedOn: Date,
});

const DataModel = mongoose.model("Data", DataSchema);

export { DataModel as Data };
