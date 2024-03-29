import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

export default connectToDB;
