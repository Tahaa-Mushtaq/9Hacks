import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { router } from "./views/routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api",router);
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
