import mongoose from "mongoose";

const { Schema } = mongoose;

const carSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true, max: new Date().getFullYear() },
  description: String,
  odometer: Number,
  condition: String,
  location: String,
  category: String,
  isSalvage: Boolean,
  saleDate: String,
});

const car = mongoose.model("carlists", carSchema);

export { car };
