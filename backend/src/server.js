import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 8080;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
