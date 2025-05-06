import express from "express";
import SurveyModel from "./models/surveyschema.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await SurveyModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, gender, nationality, email, phone, address, message } =
      req.body;

    const newUser = new SurveyModel({
      name,
      gender,
      nationality,
      email,
      phone,
      address,
      message,
    });

    await newUser.save();
    res.status(200).json({ msg: `${name} saved successfully!` });
  } catch (error) {
    res.status(500).json({ error: "Error saving form data" });
  }
});

export default router;
