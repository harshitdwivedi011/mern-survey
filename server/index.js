import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import surveyRoutes from "./surveyapi.js";

const app = express();
const PORT = 5000;
dotenv.config();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use("/submissions", surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
