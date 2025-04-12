import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("Error in connecting to MongoDB:", err.message);
  }
};

export default db;
