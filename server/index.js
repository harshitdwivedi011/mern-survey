import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import surveyRoutes from "./surveyapi.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/surveyApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use("/submissions", surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
