import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  data: Object,
  submittedOn: Date,
});

const DataModel = mongoose.model("Data", DataSchema);

export { DataModel as Data };
